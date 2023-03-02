# `storagegatewayNfsFileShare` Submodule <a name="`storagegatewayNfsFileShare` Submodule" id="@cdktf/provider-aws.storagegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayNfsFileShare <a name="StoragegatewayNfsFileShare" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share aws_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShare(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig">StoragegatewayNfsFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig">StoragegatewayNfsFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults">putNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults">resetNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash">resetSquash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes"></a>

```typescript
public putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `putNfsFileShareDefaults` <a name="putNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults"></a>

```typescript
public putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts"></a>

```typescript
public putTimeouts(value: StoragegatewayNfsFileShareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a>

---

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn"></a>

```typescript
public resetAuditDestinationArn(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes"></a>

```typescript
public resetCacheAttributes(): void
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass"></a>

```typescript
public resetDefaultStorageClass(): void
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName"></a>

```typescript
public resetFileShareName(): void
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled"></a>

```typescript
public resetGuessMimeTypeEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetNfsFileShareDefaults` <a name="resetNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults"></a>

```typescript
public resetNfsFileShareDefaults(): void
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy"></a>

```typescript
public resetNotificationPolicy(): void
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl"></a>

```typescript
public resetObjectAcl(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays"></a>

```typescript
public resetRequesterPays(): void
```

##### `resetSquash` <a name="resetSquash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash"></a>

```typescript
public resetSquash(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName"></a>

```typescript
public resetVpcEndpointDnsName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileshareId">fileshareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference">StoragegatewayNfsFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput">clientListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput">locationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput">nfsFileShareDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput">objectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput">squashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList">clientList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName">fileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl">objectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewayNfsFileShareCacheAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `fileshareId`<sup>Required</sup> <a name="fileshareId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileshareId"></a>

```typescript
public readonly fileshareId: string;
```

- *Type:* string

---

##### `nfsFileShareDefaults`<sup>Required</sup> <a name="nfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```typescript
public readonly nfsFileShareDefaults: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewayNfsFileShareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference">StoragegatewayNfsFileShareTimeoutsOutputReference</a>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput"></a>

```typescript
public readonly auditDestinationArnInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput"></a>

```typescript
public readonly cacheAttributesInput: StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `clientListInput`<sup>Optional</sup> <a name="clientListInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput"></a>

```typescript
public readonly clientListInput: string[];
```

- *Type:* string[]

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput"></a>

```typescript
public readonly defaultStorageClassInput: string;
```

- *Type:* string

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput"></a>

```typescript
public readonly fileShareNameInput: string;
```

- *Type:* string

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput"></a>

```typescript
public readonly guessMimeTypeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput"></a>

```typescript
public readonly locationArnInput: string;
```

- *Type:* string

---

##### `nfsFileShareDefaultsInput`<sup>Optional</sup> <a name="nfsFileShareDefaultsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput"></a>

```typescript
public readonly nfsFileShareDefaultsInput: StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput"></a>

```typescript
public readonly notificationPolicyInput: string;
```

- *Type:* string

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput"></a>

```typescript
public readonly objectAclInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput"></a>

```typescript
public readonly requesterPaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput"></a>

```typescript
public readonly squashInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: StoragegatewayNfsFileShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> | cdktf.IResolvable

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput"></a>

```typescript
public readonly vpcEndpointDnsNameInput: string;
```

- *Type:* string

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList"></a>

```typescript
public readonly clientList: string[];
```

- *Type:* string[]

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayNfsFileShareCacheAttributes <a name="StoragegatewayNfsFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

const storagegatewayNfsFileShareCacheAttributes: storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewayNfsFileShareConfig <a name="StoragegatewayNfsFileShareConfig" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

const storagegatewayNfsFileShareConfig: storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList">clientList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn">locationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | nfs_file_share_defaults block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash">squash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList"></a>

```typescript
public readonly clientList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}.

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults"></a>

```typescript
public readonly nfsFileShareDefaults: StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

nfs_file_share_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}.

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewayNfsFileShareTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#timeouts StoragegatewayNfsFileShare#timeouts}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewayNfsFileShareNfsFileShareDefaults <a name="StoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

const storagegatewayNfsFileShareNfsFileShareDefaults: storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode">directoryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode">fileMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId">ownerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}. |

---

##### `directoryMode`<sup>Optional</sup> <a name="directoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode"></a>

```typescript
public readonly directoryMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}.

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}.

---

### StoragegatewayNfsFileShareTimeouts <a name="StoragegatewayNfsFileShareTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

const storagegatewayNfsFileShareTimeouts: storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#create StoragegatewayNfsFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#delete StoragegatewayNfsFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#update StoragegatewayNfsFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#create StoragegatewayNfsFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#delete StoragegatewayNfsFileShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#update StoragegatewayNfsFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayNfsFileShareCacheAttributesOutputReference <a name="StoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```typescript
public resetCacheStaleTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```typescript
public readonly cacheStaleTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---


### StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode">resetDirectoryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId">resetOwnerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryMode` <a name="resetDirectoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode"></a>

```typescript
public resetDirectoryMode(): void
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode"></a>

```typescript
public resetFileMode(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId"></a>

```typescript
public resetOwnerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput">directoryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directoryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">fileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryModeInput`<sup>Optional</sup> <a name="directoryModeInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput"></a>

```typescript
public readonly directoryModeInput: string;
```

- *Type:* string

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput"></a>

```typescript
public readonly fileModeInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `directoryMode`<sup>Required</sup> <a name="directoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```typescript
public readonly directoryMode: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### StoragegatewayNfsFileShareTimeoutsOutputReference <a name="StoragegatewayNfsFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktf/provider-aws'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayNfsFileShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> | cdktf.IResolvable

---



