# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktf/provider-aws.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share aws_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

new storagegatewaySmbFileShare.StoragegatewaySmbFileShare(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">resetAccessBasedEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">resetAdminUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">resetCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">resetInvalidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">resetOplocksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled">resetSmbAclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">resetValidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```typescript
public putCacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts"></a>

```typescript
public putTimeouts(value: StoragegatewaySmbFileShareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

---

##### `resetAccessBasedEnumeration` <a name="resetAccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```typescript
public resetAccessBasedEnumeration(): void
```

##### `resetAdminUserList` <a name="resetAdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```typescript
public resetAdminUserList(): void
```

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```typescript
public resetAuditDestinationArn(): void
```

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```typescript
public resetCacheAttributes(): void
```

##### `resetCaseSensitivity` <a name="resetCaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```typescript
public resetCaseSensitivity(): void
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```typescript
public resetDefaultStorageClass(): void
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```typescript
public resetFileShareName(): void
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```typescript
public resetGuessMimeTypeEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvalidUserList` <a name="resetInvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```typescript
public resetInvalidUserList(): void
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```typescript
public resetNotificationPolicy(): void
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```typescript
public resetObjectAcl(): void
```

##### `resetOplocksEnabled` <a name="resetOplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```typescript
public resetOplocksEnabled(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```typescript
public resetRequesterPays(): void
```

##### `resetSmbAclEnabled` <a name="resetSmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled"></a>

```typescript
public resetSmbAclEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidUserList` <a name="resetValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```typescript
public resetValidUserList(): void
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```typescript
public resetVpcEndpointDnsName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId">fileshareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">accessBasedEnumerationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">adminUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">authenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">caseSensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">invalidUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">locationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">objectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">oplocksEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput">smbAclEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">validUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">adminUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">caseSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">fileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">invalidUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">objectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">oplocksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled">smbAclEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">validUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewaySmbFileShareCacheAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `fileshareId`<sup>Required</sup> <a name="fileshareId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId"></a>

```typescript
public readonly fileshareId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewaySmbFileShareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a>

---

##### `accessBasedEnumerationInput`<sup>Optional</sup> <a name="accessBasedEnumerationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```typescript
public readonly accessBasedEnumerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminUserListInput`<sup>Optional</sup> <a name="adminUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```typescript
public readonly adminUserListInput: string[];
```

- *Type:* string[]

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```typescript
public readonly auditDestinationArnInput: string;
```

- *Type:* string

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```typescript
public readonly cacheAttributesInput: StoragegatewaySmbFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `caseSensitivityInput`<sup>Optional</sup> <a name="caseSensitivityInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```typescript
public readonly caseSensitivityInput: string;
```

- *Type:* string

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```typescript
public readonly defaultStorageClassInput: string;
```

- *Type:* string

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```typescript
public readonly fileShareNameInput: string;
```

- *Type:* string

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```typescript
public readonly guessMimeTypeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invalidUserListInput`<sup>Optional</sup> <a name="invalidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```typescript
public readonly invalidUserListInput: string[];
```

- *Type:* string[]

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```typescript
public readonly locationArnInput: string;
```

- *Type:* string

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```typescript
public readonly notificationPolicyInput: string;
```

- *Type:* string

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```typescript
public readonly objectAclInput: string;
```

- *Type:* string

---

##### `oplocksEnabledInput`<sup>Optional</sup> <a name="oplocksEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```typescript
public readonly oplocksEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```typescript
public readonly requesterPaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `smbAclEnabledInput`<sup>Optional</sup> <a name="smbAclEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput"></a>

```typescript
public readonly smbAclEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: StoragegatewaySmbFileShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> | cdktf.IResolvable

---

##### `validUserListInput`<sup>Optional</sup> <a name="validUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```typescript
public readonly validUserListInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```typescript
public readonly vpcEndpointDnsNameInput: string;
```

- *Type:* string

---

##### `accessBasedEnumeration`<sup>Required</sup> <a name="accessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```typescript
public readonly accessBasedEnumeration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminUserList`<sup>Required</sup> <a name="adminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```typescript
public readonly adminUserList: string[];
```

- *Type:* string[]

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `caseSensitivity`<sup>Required</sup> <a name="caseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```typescript
public readonly caseSensitivity: string;
```

- *Type:* string

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invalidUserList`<sup>Required</sup> <a name="invalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```typescript
public readonly invalidUserList: string[];
```

- *Type:* string[]

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

---

##### `oplocksEnabled`<sup>Required</sup> <a name="oplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```typescript
public readonly oplocksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `smbAclEnabled`<sup>Required</sup> <a name="smbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled"></a>

```typescript
public readonly smbAclEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validUserList`<sup>Required</sup> <a name="validUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```typescript
public readonly validUserList: string[];
```

- *Type:* string[]

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

const storagegatewaySmbFileShareCacheAttributes: storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

const storagegatewaySmbFileShareConfig: storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">locationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">adminUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">authentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">caseSensitivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">invalidUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">oplocksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled">smbAclEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">validUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="accessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```typescript
public readonly accessBasedEnumeration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `adminUserList`<sup>Optional</sup> <a name="adminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```typescript
public readonly adminUserList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewaySmbFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `caseSensitivity`<sup>Optional</sup> <a name="caseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```typescript
public readonly caseSensitivity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invalidUserList`<sup>Optional</sup> <a name="invalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```typescript
public readonly invalidUserList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `oplocksEnabled`<sup>Optional</sup> <a name="oplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```typescript
public readonly oplocksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `smbAclEnabled`<sup>Optional</sup> <a name="smbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled"></a>

```typescript
public readonly smbAclEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewaySmbFileShareTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `validUserList`<sup>Optional</sup> <a name="validUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```typescript
public readonly validUserList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewaySmbFileShareTimeouts <a name="StoragegatewaySmbFileShareTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

const storagegatewaySmbFileShareTimeouts: storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

new storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```typescript
public resetCacheStaleTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```typescript
public readonly cacheStaleTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewaySmbFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTimeoutsOutputReference <a name="StoragegatewaySmbFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer"></a>

```typescript
import { storagegatewaySmbFileShare } from '@cdktf/provider-aws'

new storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewaySmbFileShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> | cdktf.IResolvable

---



