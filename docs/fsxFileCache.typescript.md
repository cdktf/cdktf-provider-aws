# `fsxFileCache` Submodule <a name="`fsxFileCache` Submodule" id="@cdktf/provider-aws.fsxFileCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxFileCache <a name="FsxFileCache" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache aws_fsx_file_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCache(scope: Construct, id: string, config: FsxFileCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig">FsxFileCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig">FsxFileCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation">putDataRepositoryAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration">putLustreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations">resetCopyTagsToDataRepositoryAssociations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation">resetDataRepositoryAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration">resetLustreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataRepositoryAssociation` <a name="putDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation"></a>

```typescript
public putDataRepositoryAssociation(value: IResolvable | FsxFileCacheDataRepositoryAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]

---

##### `putLustreConfiguration` <a name="putLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration"></a>

```typescript
public putLustreConfiguration(value: IResolvable | FsxFileCacheLustreConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxFileCacheTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

---

##### `resetCopyTagsToDataRepositoryAssociations` <a name="resetCopyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations"></a>

```typescript
public resetCopyTagsToDataRepositoryAssociations(): void
```

##### `resetDataRepositoryAssociation` <a name="resetDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation"></a>

```typescript
public resetDataRepositoryAssociation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLustreConfiguration` <a name="resetLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration"></a>

```typescript
public resetLustreConfiguration(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

fsxFileCache.FsxFileCache.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

fsxFileCache.FsxFileCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

fsxFileCache.FsxFileCache.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation">dataRepositoryAssociation</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds">dataRepositoryAssociationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId">fileCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration">lustreConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput">copyTagsToDataRepositoryAssociationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput">dataRepositoryAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput">fileCacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput">fileCacheTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput">lustreConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations">copyTagsToDataRepositoryAssociations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType">fileCacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion">fileCacheTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataRepositoryAssociation`<sup>Required</sup> <a name="dataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation"></a>

```typescript
public readonly dataRepositoryAssociation: FsxFileCacheDataRepositoryAssociationList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a>

---

##### `dataRepositoryAssociationIds`<sup>Required</sup> <a name="dataRepositoryAssociationIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds"></a>

```typescript
public readonly dataRepositoryAssociationIds: string[];
```

- *Type:* string[]

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fileCacheId`<sup>Required</sup> <a name="fileCacheId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId"></a>

```typescript
public readonly fileCacheId: string;
```

- *Type:* string

---

##### `lustreConfiguration`<sup>Required</sup> <a name="lustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration"></a>

```typescript
public readonly lustreConfiguration: FsxFileCacheLustreConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a>

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts"></a>

```typescript
public readonly timeouts: FsxFileCacheTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `copyTagsToDataRepositoryAssociationsInput`<sup>Optional</sup> <a name="copyTagsToDataRepositoryAssociationsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput"></a>

```typescript
public readonly copyTagsToDataRepositoryAssociationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataRepositoryAssociationInput`<sup>Optional</sup> <a name="dataRepositoryAssociationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput"></a>

```typescript
public readonly dataRepositoryAssociationInput: IResolvable | FsxFileCacheDataRepositoryAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]

---

##### `fileCacheTypeInput`<sup>Optional</sup> <a name="fileCacheTypeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput"></a>

```typescript
public readonly fileCacheTypeInput: string;
```

- *Type:* string

---

##### `fileCacheTypeVersionInput`<sup>Optional</sup> <a name="fileCacheTypeVersionInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput"></a>

```typescript
public readonly fileCacheTypeVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `lustreConfigurationInput`<sup>Optional</sup> <a name="lustreConfigurationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput"></a>

```typescript
public readonly lustreConfigurationInput: IResolvable | FsxFileCacheLustreConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxFileCacheTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a> | cdktf.IResolvable

---

##### `copyTagsToDataRepositoryAssociations`<sup>Required</sup> <a name="copyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations"></a>

```typescript
public readonly copyTagsToDataRepositoryAssociations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileCacheType`<sup>Required</sup> <a name="fileCacheType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType"></a>

```typescript
public readonly fileCacheType: string;
```

- *Type:* string

---

##### `fileCacheTypeVersion`<sup>Required</sup> <a name="fileCacheTypeVersion" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion"></a>

```typescript
public readonly fileCacheTypeVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxFileCacheConfig <a name="FsxFileCacheConfig" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheConfig: fsxFileCache.FsxFileCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType">fileCacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion">fileCacheTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations">copyTagsToDataRepositoryAssociations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation">dataRepositoryAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]</code> | data_repository_association block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration">lustreConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]</code> | lustre_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fileCacheType`<sup>Required</sup> <a name="fileCacheType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType"></a>

```typescript
public readonly fileCacheType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}.

---

##### `fileCacheTypeVersion`<sup>Required</sup> <a name="fileCacheTypeVersion" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion"></a>

```typescript
public readonly fileCacheTypeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}.

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}.

---

##### `copyTagsToDataRepositoryAssociations`<sup>Optional</sup> <a name="copyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations"></a>

```typescript
public readonly copyTagsToDataRepositoryAssociations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}.

---

##### `dataRepositoryAssociation`<sup>Optional</sup> <a name="dataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation"></a>

```typescript
public readonly dataRepositoryAssociation: IResolvable | FsxFileCacheDataRepositoryAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]

data_repository_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}.

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="lustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration"></a>

```typescript
public readonly lustreConfiguration: IResolvable | FsxFileCacheLustreConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]

lustre_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxFileCacheTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#timeouts FsxFileCache#timeouts}

---

### FsxFileCacheDataRepositoryAssociation <a name="FsxFileCacheDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheDataRepositoryAssociation: fsxFileCache.FsxFileCacheDataRepositoryAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath">fileCachePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories">dataRepositorySubdirectories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs">nfs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]</code> | nfs block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath"></a>

```typescript
public readonly dataRepositoryPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}.

---

##### `fileCachePath`<sup>Required</sup> <a name="fileCachePath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath"></a>

```typescript
public readonly fileCachePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}.

---

##### `dataRepositorySubdirectories`<sup>Optional</sup> <a name="dataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories"></a>

```typescript
public readonly dataRepositorySubdirectories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}.

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs"></a>

```typescript
public readonly nfs: IResolvable | FsxFileCacheDataRepositoryAssociationNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#nfs FsxFileCache#nfs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

### FsxFileCacheDataRepositoryAssociationNfs <a name="FsxFileCacheDataRepositoryAssociationNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheDataRepositoryAssociationNfs: fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}.

---

##### `dnsIps`<sup>Optional</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}.

---

### FsxFileCacheLustreConfiguration <a name="FsxFileCacheLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheLustreConfiguration: fsxFileCache.FsxFileCacheLustreConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration">metadataConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]</code> | metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}. |

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}.

---

##### `metadataConfiguration`<sup>Required</sup> <a name="metadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration"></a>

```typescript
public readonly metadataConfiguration: IResolvable | FsxFileCacheLustreConfigurationMetadataConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]

metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#metadata_configuration FsxFileCache#metadata_configuration}

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="perUnitStorageThroughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}.

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}.

---

### FsxFileCacheLustreConfigurationLogConfiguration <a name="FsxFileCacheLustreConfigurationLogConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheLustreConfigurationLogConfiguration: fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration = { ... }
```


### FsxFileCacheLustreConfigurationMetadataConfiguration <a name="FsxFileCacheLustreConfigurationMetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheLustreConfigurationMetadataConfiguration: fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

### FsxFileCacheTimeouts <a name="FsxFileCacheTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

const fsxFileCacheTimeouts: fsxFileCache.FsxFileCacheTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxFileCacheDataRepositoryAssociationList <a name="FsxFileCacheDataRepositoryAssociationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheDataRepositoryAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get"></a>

```typescript
public get(index: number): FsxFileCacheDataRepositoryAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxFileCacheDataRepositoryAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>[]

---


### FsxFileCacheDataRepositoryAssociationNfsList <a name="FsxFileCacheDataRepositoryAssociationNfsList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get"></a>

```typescript
public get(index: number): FsxFileCacheDataRepositoryAssociationNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxFileCacheDataRepositoryAssociationNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]

---


### FsxFileCacheDataRepositoryAssociationNfsOutputReference <a name="FsxFileCacheDataRepositoryAssociationNfsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps">resetDnsIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsIps` <a name="resetDnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps"></a>

```typescript
public resetDnsIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput">dnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsIpsInput`<sup>Optional</sup> <a name="dnsIpsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput"></a>

```typescript
public readonly dnsIpsInput: string[];
```

- *Type:* string[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheDataRepositoryAssociationNfs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a> | cdktf.IResolvable

---


### FsxFileCacheDataRepositoryAssociationOutputReference <a name="FsxFileCacheDataRepositoryAssociationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories">resetDataRepositorySubdirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfs` <a name="putNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs"></a>

```typescript
public putNfs(value: IResolvable | FsxFileCacheDataRepositoryAssociationNfs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]

---

##### `resetDataRepositorySubdirectories` <a name="resetDataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories"></a>

```typescript
public resetDataRepositorySubdirectories(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId">fileCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput">dataRepositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput">dataRepositorySubdirectoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput">fileCachePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput">nfsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories">dataRepositorySubdirectories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath">fileCachePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `fileCacheId`<sup>Required</sup> <a name="fileCacheId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId"></a>

```typescript
public readonly fileCacheId: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs"></a>

```typescript
public readonly nfs: FsxFileCacheDataRepositoryAssociationNfsList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `dataRepositoryPathInput`<sup>Optional</sup> <a name="dataRepositoryPathInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput"></a>

```typescript
public readonly dataRepositoryPathInput: string;
```

- *Type:* string

---

##### `dataRepositorySubdirectoriesInput`<sup>Optional</sup> <a name="dataRepositorySubdirectoriesInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput"></a>

```typescript
public readonly dataRepositorySubdirectoriesInput: string[];
```

- *Type:* string[]

---

##### `fileCachePathInput`<sup>Optional</sup> <a name="fileCachePathInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput"></a>

```typescript
public readonly fileCachePathInput: string;
```

- *Type:* string

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: IResolvable | FsxFileCacheDataRepositoryAssociationNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath"></a>

```typescript
public readonly dataRepositoryPath: string;
```

- *Type:* string

---

##### `dataRepositorySubdirectories`<sup>Required</sup> <a name="dataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories"></a>

```typescript
public readonly dataRepositorySubdirectories: string[];
```

- *Type:* string[]

---

##### `fileCachePath`<sup>Required</sup> <a name="fileCachePath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath"></a>

```typescript
public readonly fileCachePath: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheDataRepositoryAssociation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a> | cdktf.IResolvable

---


### FsxFileCacheLustreConfigurationList <a name="FsxFileCacheLustreConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get"></a>

```typescript
public get(index: number): FsxFileCacheLustreConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxFileCacheLustreConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>[]

---


### FsxFileCacheLustreConfigurationLogConfigurationList <a name="FsxFileCacheLustreConfigurationLogConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get"></a>

```typescript
public get(index: number): FsxFileCacheLustreConfigurationLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FsxFileCacheLustreConfigurationLogConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheLustreConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a>

---


### FsxFileCacheLustreConfigurationMetadataConfigurationList <a name="FsxFileCacheLustreConfigurationMetadataConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get"></a>

```typescript
public get(index: number): FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxFileCacheLustreConfigurationMetadataConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]

---


### FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheLustreConfigurationMetadataConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a> | cdktf.IResolvable

---


### FsxFileCacheLustreConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheLustreConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration">putMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadataConfiguration` <a name="putMetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration"></a>

```typescript
public putMetadataConfiguration(value: IResolvable | FsxFileCacheLustreConfigurationMetadataConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]

---

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime"></a>

```typescript
public resetWeeklyMaintenanceStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput">metadataConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput">perUnitStorageThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FsxFileCacheLustreConfigurationLogConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a>

---

##### `metadataConfiguration`<sup>Required</sup> <a name="metadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration"></a>

```typescript
public readonly metadataConfiguration: FsxFileCacheLustreConfigurationMetadataConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a>

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `metadataConfigurationInput`<sup>Optional</sup> <a name="metadataConfigurationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput"></a>

```typescript
public readonly metadataConfigurationInput: IResolvable | FsxFileCacheLustreConfigurationMetadataConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>[]

---

##### `perUnitStorageThroughputInput`<sup>Optional</sup> <a name="perUnitStorageThroughputInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput"></a>

```typescript
public readonly perUnitStorageThroughputInput: number;
```

- *Type:* number

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput"></a>

```typescript
public readonly weeklyMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="perUnitStorageThroughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: number;
```

- *Type:* number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheLustreConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a> | cdktf.IResolvable

---


### FsxFileCacheTimeoutsOutputReference <a name="FsxFileCacheTimeoutsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxFileCache } from '@cdktf/provider-aws'

new fsxFileCache.FsxFileCacheTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxFileCacheTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a> | cdktf.IResolvable

---



