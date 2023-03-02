# `kendraIndex` Submodule <a name="`kendraIndex` Submodule" id="@cdktf/provider-aws.kendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraIndex <a name="KendraIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndex(scope: Construct, id: string, config: KendraIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits">putCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates">putDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration">putUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations">putUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits">resetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates">resetDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy">resetUserContextPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration">resetUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations">resetUserTokenConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacityUnits` <a name="putCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits"></a>

```typescript
public putCapacityUnits(value: KendraIndexCapacityUnits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `putDocumentMetadataConfigurationUpdates` <a name="putDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates"></a>

```typescript
public putDocumentMetadataConfigurationUpdates(value: IResolvable | KendraIndexDocumentMetadataConfigurationUpdates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: KendraIndexServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: KendraIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

---

##### `putUserGroupResolutionConfiguration` <a name="putUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration"></a>

```typescript
public putUserGroupResolutionConfiguration(value: KendraIndexUserGroupResolutionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `putUserTokenConfigurations` <a name="putUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations"></a>

```typescript
public putUserTokenConfigurations(value: KendraIndexUserTokenConfigurations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `resetCapacityUnits` <a name="resetCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits"></a>

```typescript
public resetCapacityUnits(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentMetadataConfigurationUpdates` <a name="resetDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates"></a>

```typescript
public resetDocumentMetadataConfigurationUpdates(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserContextPolicy` <a name="resetUserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy"></a>

```typescript
public resetUserContextPolicy(): void
```

##### `resetUserGroupResolutionConfiguration` <a name="resetUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration"></a>

```typescript
public resetUserGroupResolutionConfiguration(): void
```

##### `resetUserTokenConfigurations` <a name="resetUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations"></a>

```typescript
public resetUserTokenConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

kendraIndex.KendraIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

kendraIndex.KendraIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

kendraIndex.KendraIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates">documentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics">indexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration">userGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput">capacityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput">documentMetadataConfigurationUpdatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput">userContextPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput">userGroupResolutionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput">userTokenConfigurationsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy">userContextPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: KendraIndexCapacityUnitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `documentMetadataConfigurationUpdates`<sup>Required</sup> <a name="documentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates"></a>

```typescript
public readonly documentMetadataConfigurationUpdates: KendraIndexDocumentMetadataConfigurationUpdatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `indexStatistics`<sup>Required</sup> <a name="indexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics"></a>

```typescript
public readonly indexStatistics: KendraIndexIndexStatisticsList;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a>

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: KendraIndexServerSideEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts"></a>

```typescript
public readonly timeouts: KendraIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `userGroupResolutionConfiguration`<sup>Required</sup> <a name="userGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration"></a>

```typescript
public readonly userGroupResolutionConfiguration: KendraIndexUserGroupResolutionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a>

---

##### `userTokenConfigurations`<sup>Required</sup> <a name="userTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations"></a>

```typescript
public readonly userTokenConfigurations: KendraIndexUserTokenConfigurationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a>

---

##### `capacityUnitsInput`<sup>Optional</sup> <a name="capacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput"></a>

```typescript
public readonly capacityUnitsInput: KendraIndexCapacityUnits;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentMetadataConfigurationUpdatesInput`<sup>Optional</sup> <a name="documentMetadataConfigurationUpdatesInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput"></a>

```typescript
public readonly documentMetadataConfigurationUpdatesInput: IResolvable | KendraIndexDocumentMetadataConfigurationUpdates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: KendraIndexServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KendraIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> | cdktf.IResolvable

---

##### `userContextPolicyInput`<sup>Optional</sup> <a name="userContextPolicyInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput"></a>

```typescript
public readonly userContextPolicyInput: string;
```

- *Type:* string

---

##### `userGroupResolutionConfigurationInput`<sup>Optional</sup> <a name="userGroupResolutionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput"></a>

```typescript
public readonly userGroupResolutionConfigurationInput: KendraIndexUserGroupResolutionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `userTokenConfigurationsInput`<sup>Optional</sup> <a name="userTokenConfigurationsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput"></a>

```typescript
public readonly userTokenConfigurationsInput: KendraIndexUserTokenConfigurations;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userContextPolicy`<sup>Required</sup> <a name="userContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy"></a>

```typescript
public readonly userContextPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraIndexCapacityUnits <a name="KendraIndexCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexCapacityUnits: kendraIndex.KendraIndexCapacityUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}. |

---

##### `queryCapacityUnits`<sup>Optional</sup> <a name="queryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits"></a>

```typescript
public readonly queryCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

##### `storageCapacityUnits`<sup>Optional</sup> <a name="storageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits"></a>

```typescript
public readonly storageCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

### KendraIndexConfig <a name="KendraIndexConfig" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexConfig: kendraIndex.KendraIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | capacity_units block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates">documentMetadataConfigurationUpdates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]</code> | document_metadata_configuration_updates block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition">edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy">userContextPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration">userGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | user_group_resolution_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | user_token_configurations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}.

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: KendraIndexCapacityUnits;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

capacity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}.

---

##### `documentMetadataConfigurationUpdates`<sup>Optional</sup> <a name="documentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates"></a>

```typescript
public readonly documentMetadataConfigurationUpdates: IResolvable | KendraIndexDocumentMetadataConfigurationUpdates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]

document_metadata_configuration_updates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: KendraIndexServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KendraIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}

---

##### `userContextPolicy`<sup>Optional</sup> <a name="userContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy"></a>

```typescript
public readonly userContextPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `userGroupResolutionConfiguration`<sup>Optional</sup> <a name="userGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration"></a>

```typescript
public readonly userGroupResolutionConfiguration: KendraIndexUserGroupResolutionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

user_group_resolution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}

---

##### `userTokenConfigurations`<sup>Optional</sup> <a name="userTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations"></a>

```typescript
public readonly userTokenConfigurations: KendraIndexUserTokenConfigurations;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

user_token_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}

---

### KendraIndexDocumentMetadataConfigurationUpdates <a name="KendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexDocumentMetadataConfigurationUpdates: kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance">relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | relevance block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search">search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | search block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}.

---

##### `relevance`<sup>Optional</sup> <a name="relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance"></a>

```typescript
public readonly relevance: KendraIndexDocumentMetadataConfigurationUpdatesRelevance;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

relevance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#relevance KendraIndex#relevance}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search"></a>

```typescript
public readonly search: KendraIndexDocumentMetadataConfigurationUpdatesSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

search block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#search KendraIndex#search}

---

### KendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexDocumentMetadataConfigurationUpdatesRelevance: kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness">freshness</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance">importance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder">rankOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap">valuesImportanceMap</a></code> | <code>{[ key: string ]: number}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}.

---

##### `freshness`<sup>Optional</sup> <a name="freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness"></a>

```typescript
public readonly freshness: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}.

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance"></a>

```typescript
public readonly importance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}.

---

##### `rankOrder`<sup>Optional</sup> <a name="rankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder"></a>

```typescript
public readonly rankOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}.

---

##### `valuesImportanceMap`<sup>Optional</sup> <a name="valuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap"></a>

```typescript
public readonly valuesImportanceMap: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}.

---

### KendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexDocumentMetadataConfigurationUpdatesSearch: kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable">displayable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable">facetable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable">searchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable">sortable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}. |

---

##### `displayable`<sup>Optional</sup> <a name="displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable"></a>

```typescript
public readonly displayable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}.

---

##### `facetable`<sup>Optional</sup> <a name="facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable"></a>

```typescript
public readonly facetable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}.

---

##### `searchable`<sup>Optional</sup> <a name="searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable"></a>

```typescript
public readonly searchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}.

---

##### `sortable`<sup>Optional</sup> <a name="sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable"></a>

```typescript
public readonly sortable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}.

---

### KendraIndexIndexStatistics <a name="KendraIndexIndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexIndexStatistics: kendraIndex.KendraIndexIndexStatistics = { ... }
```


### KendraIndexIndexStatisticsFaqStatistics <a name="KendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexIndexStatisticsFaqStatistics: kendraIndex.KendraIndexIndexStatisticsFaqStatistics = { ... }
```


### KendraIndexIndexStatisticsTextDocumentStatistics <a name="KendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexIndexStatisticsTextDocumentStatistics: kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics = { ... }
```


### KendraIndexServerSideEncryptionConfiguration <a name="KendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexServerSideEncryptionConfiguration: kendraIndex.KendraIndexServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

### KendraIndexTimeouts <a name="KendraIndexTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexTimeouts: kendraIndex.KendraIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}.

---

### KendraIndexUserGroupResolutionConfiguration <a name="KendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexUserGroupResolutionConfiguration: kendraIndex.KendraIndexUserGroupResolutionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode">userGroupResolutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}. |

---

##### `userGroupResolutionMode`<sup>Required</sup> <a name="userGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode"></a>

```typescript
public readonly userGroupResolutionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}.

---

### KendraIndexUserTokenConfigurations <a name="KendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexUserTokenConfigurations: kendraIndex.KendraIndexUserTokenConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | json_token_type_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | jwt_token_type_configuration block. |

---

##### `jsonTokenTypeConfiguration`<sup>Optional</sup> <a name="jsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration"></a>

```typescript
public readonly jsonTokenTypeConfiguration: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

json_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}

---

##### `jwtTokenTypeConfiguration`<sup>Optional</sup> <a name="jwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration"></a>

```typescript
public readonly jwtTokenTypeConfiguration: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

jwt_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}

---

### KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration: kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

### KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

const kendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration: kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation">keyLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex">claimRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation"></a>

```typescript
public readonly keyLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}.

---

##### `claimRegex`<sup>Optional</sup> <a name="claimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex"></a>

```typescript
public readonly claimRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}.

---

##### `groupAttributeField`<sup>Optional</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}.

---

##### `userNameAttributeField`<sup>Optional</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraIndexCapacityUnitsOutputReference <a name="KendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexCapacityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits">resetQueryCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits">resetStorageCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryCapacityUnits` <a name="resetQueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits"></a>

```typescript
public resetQueryCapacityUnits(): void
```

##### `resetStorageCapacityUnits` <a name="resetStorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits"></a>

```typescript
public resetStorageCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput">queryCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput">storageCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryCapacityUnitsInput`<sup>Optional</sup> <a name="queryCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput"></a>

```typescript
public readonly queryCapacityUnitsInput: number;
```

- *Type:* number

---

##### `storageCapacityUnitsInput`<sup>Optional</sup> <a name="storageCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput"></a>

```typescript
public readonly storageCapacityUnitsInput: number;
```

- *Type:* number

---

##### `queryCapacityUnits`<sup>Required</sup> <a name="queryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```typescript
public readonly queryCapacityUnits: number;
```

- *Type:* number

---

##### `storageCapacityUnits`<sup>Required</sup> <a name="storageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```typescript
public readonly storageCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexCapacityUnits;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesList <a name="KendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```typescript
public get(index: number): KendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendraIndexDocumentMetadataConfigurationUpdates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>[]

---


### KendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance">putRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance">resetRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelevance` <a name="putRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance"></a>

```typescript
public putRelevance(value: KendraIndexDocumentMetadataConfigurationUpdatesRelevance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch"></a>

```typescript
public putSearch(value: KendraIndexDocumentMetadataConfigurationUpdatesSearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `resetRelevance` <a name="resetRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance"></a>

```typescript
public resetRelevance(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput">relevanceInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput">searchInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```typescript
public readonly relevance: KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```typescript
public readonly search: KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relevanceInput`<sup>Optional</sup> <a name="relevanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput"></a>

```typescript
public readonly relevanceInput: KendraIndexDocumentMetadataConfigurationUpdatesRelevance;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: KendraIndexDocumentMetadataConfigurationUpdatesSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexDocumentMetadataConfigurationUpdates | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a> | cdktf.IResolvable

---


### KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness">resetFreshness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance">resetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder">resetRankOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap">resetValuesImportanceMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetFreshness` <a name="resetFreshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness"></a>

```typescript
public resetFreshness(): void
```

##### `resetImportance` <a name="resetImportance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance"></a>

```typescript
public resetImportance(): void
```

##### `resetRankOrder` <a name="resetRankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder"></a>

```typescript
public resetRankOrder(): void
```

##### `resetValuesImportanceMap` <a name="resetValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap"></a>

```typescript
public resetValuesImportanceMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput">freshnessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput">importanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput">rankOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput">valuesImportanceMapInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">freshness</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">importance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">rankOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">valuesImportanceMap</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `freshnessInput`<sup>Optional</sup> <a name="freshnessInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput"></a>

```typescript
public readonly freshnessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `importanceInput`<sup>Optional</sup> <a name="importanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput"></a>

```typescript
public readonly importanceInput: number;
```

- *Type:* number

---

##### `rankOrderInput`<sup>Optional</sup> <a name="rankOrderInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput"></a>

```typescript
public readonly rankOrderInput: string;
```

- *Type:* string

---

##### `valuesImportanceMapInput`<sup>Optional</sup> <a name="valuesImportanceMapInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput"></a>

```typescript
public readonly valuesImportanceMapInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```typescript
public readonly freshness: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```typescript
public readonly importance: number;
```

- *Type:* number

---

##### `rankOrder`<sup>Required</sup> <a name="rankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```typescript
public readonly rankOrder: string;
```

- *Type:* string

---

##### `valuesImportanceMap`<sup>Required</sup> <a name="valuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```typescript
public readonly valuesImportanceMap: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexDocumentMetadataConfigurationUpdatesRelevance;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable">resetDisplayable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable">resetFacetable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable">resetSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable">resetSortable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayable` <a name="resetDisplayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable"></a>

```typescript
public resetDisplayable(): void
```

##### `resetFacetable` <a name="resetFacetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable"></a>

```typescript
public resetFacetable(): void
```

##### `resetSearchable` <a name="resetSearchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable"></a>

```typescript
public resetSearchable(): void
```

##### `resetSortable` <a name="resetSortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable"></a>

```typescript
public resetSortable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput">displayableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput">facetableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput">searchableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput">sortableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">displayable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">facetable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">searchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">sortable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayableInput`<sup>Optional</sup> <a name="displayableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput"></a>

```typescript
public readonly displayableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facetableInput`<sup>Optional</sup> <a name="facetableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput"></a>

```typescript
public readonly facetableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `searchableInput`<sup>Optional</sup> <a name="searchableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput"></a>

```typescript
public readonly searchableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortableInput`<sup>Optional</sup> <a name="sortableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput"></a>

```typescript
public readonly sortableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```typescript
public readonly displayable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```typescript
public readonly facetable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```typescript
public readonly searchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```typescript
public readonly sortable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexDocumentMetadataConfigurationUpdatesSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### KendraIndexIndexStatisticsFaqStatisticsList <a name="KendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```typescript
public get(index: number): KendraIndexIndexStatisticsFaqStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="KendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">indexedQuestionAnswersCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedQuestionAnswersCount`<sup>Required</sup> <a name="indexedQuestionAnswersCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```typescript
public readonly indexedQuestionAnswersCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexIndexStatisticsFaqStatistics;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a>

---


### KendraIndexIndexStatisticsList <a name="KendraIndexIndexStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get"></a>

```typescript
public get(index: number): KendraIndexIndexStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KendraIndexIndexStatisticsOutputReference <a name="KendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics">faqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">textDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `faqStatistics`<sup>Required</sup> <a name="faqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```typescript
public readonly faqStatistics: KendraIndexIndexStatisticsFaqStatisticsList;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `textDocumentStatistics`<sup>Required</sup> <a name="textDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```typescript
public readonly textDocumentStatistics: KendraIndexIndexStatisticsTextDocumentStatisticsList;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexIndexStatistics;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a>

---


### KendraIndexIndexStatisticsTextDocumentStatisticsList <a name="KendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```typescript
public get(index: number): KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">indexedTextBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">indexedTextDocumentsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedTextBytes`<sup>Required</sup> <a name="indexedTextBytes" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```typescript
public readonly indexedTextBytes: number;
```

- *Type:* number

---

##### `indexedTextDocumentsCount`<sup>Required</sup> <a name="indexedTextDocumentsCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```typescript
public readonly indexedTextDocumentsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexIndexStatisticsTextDocumentStatistics;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### KendraIndexServerSideEncryptionConfigurationOutputReference <a name="KendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---


### KendraIndexTimeoutsOutputReference <a name="KendraIndexTimeoutsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> | cdktf.IResolvable

---


### KendraIndexUserGroupResolutionConfigurationOutputReference <a name="KendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput">userGroupResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">userGroupResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userGroupResolutionModeInput`<sup>Optional</sup> <a name="userGroupResolutionModeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput"></a>

```typescript
public readonly userGroupResolutionModeInput: string;
```

- *Type:* string

---

##### `userGroupResolutionMode`<sup>Required</sup> <a name="userGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```typescript
public readonly userGroupResolutionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexUserGroupResolutionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">groupAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">userNameAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAttributeFieldInput`<sup>Optional</sup> <a name="groupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```typescript
public readonly groupAttributeFieldInput: string;
```

- *Type:* string

---

##### `userNameAttributeFieldInput`<sup>Optional</sup> <a name="userNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```typescript
public readonly userNameAttributeFieldInput: string;
```

- *Type:* string

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex">resetClaimRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField">resetGroupAttributeField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField">resetUserNameAttributeField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClaimRegex` <a name="resetClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex"></a>

```typescript
public resetClaimRegex(): void
```

##### `resetGroupAttributeField` <a name="resetGroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```typescript
public resetGroupAttributeField(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn"></a>

```typescript
public resetSecretsManagerArn(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserNameAttributeField` <a name="resetUserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```typescript
public resetUserNameAttributeField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput">claimRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">groupAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput">keyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">userNameAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claimRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">keyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimRegexInput`<sup>Optional</sup> <a name="claimRegexInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput"></a>

```typescript
public readonly claimRegexInput: string;
```

- *Type:* string

---

##### `groupAttributeFieldInput`<sup>Optional</sup> <a name="groupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```typescript
public readonly groupAttributeFieldInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `keyLocationInput`<sup>Optional</sup> <a name="keyLocationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput"></a>

```typescript
public readonly keyLocationInput: string;
```

- *Type:* string

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput"></a>

```typescript
public readonly secretsManagerArnInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userNameAttributeFieldInput`<sup>Optional</sup> <a name="userNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```typescript
public readonly userNameAttributeFieldInput: string;
```

- *Type:* string

---

##### `claimRegex`<sup>Required</sup> <a name="claimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```typescript
public readonly claimRegex: string;
```

- *Type:* string

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```typescript
public readonly keyLocation: string;
```

- *Type:* string

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsOutputReference <a name="KendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```typescript
import { kendraIndex } from '@cdktf/provider-aws'

new kendraIndex.KendraIndexUserTokenConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration">putJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration">putJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration">resetJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration">resetJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonTokenTypeConfiguration` <a name="putJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration"></a>

```typescript
public putJsonTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `putJwtTokenTypeConfiguration` <a name="putJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration"></a>

```typescript
public putJwtTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `resetJsonTokenTypeConfiguration` <a name="resetJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration"></a>

```typescript
public resetJsonTokenTypeConfiguration(): void
```

##### `resetJwtTokenTypeConfiguration` <a name="resetJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration"></a>

```typescript
public resetJwtTokenTypeConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput">jsonTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput">jwtTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonTokenTypeConfiguration`<sup>Required</sup> <a name="jsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```typescript
public readonly jsonTokenTypeConfiguration: KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwtTokenTypeConfiguration`<sup>Required</sup> <a name="jwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```typescript
public readonly jwtTokenTypeConfiguration: KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `jsonTokenTypeConfigurationInput`<sup>Optional</sup> <a name="jsonTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput"></a>

```typescript
public readonly jsonTokenTypeConfigurationInput: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `jwtTokenTypeConfigurationInput`<sup>Optional</sup> <a name="jwtTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput"></a>

```typescript
public readonly jwtTokenTypeConfigurationInput: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraIndexUserTokenConfigurations;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---



