# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktf/provider-aws.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store aws_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStore(scope: Construct, id: string, config: CloudtrailEventDataStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector">putAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector">resetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">resetMultiRegionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">resetOrganizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvancedEventSelector` <a name="putAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector"></a>

```typescript
public putAdvancedEventSelector(value: IResolvable | CloudtrailEventDataStoreAdvancedEventSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudtrailEventDataStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

---

##### `resetAdvancedEventSelector` <a name="resetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector"></a>

```typescript
public resetAdvancedEventSelector(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiRegionEnabled` <a name="resetMultiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```typescript
public resetMultiRegionEnabled(): void
```

##### `resetOrganizationEnabled` <a name="resetOrganizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```typescript
public resetOrganizationEnabled(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector">advancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput">advancedEventSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">multiRegionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">organizationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">organizationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedEventSelector`<sup>Required</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector"></a>

```typescript
public readonly advancedEventSelector: CloudtrailEventDataStoreAdvancedEventSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts"></a>

```typescript
public readonly timeouts: CloudtrailEventDataStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a>

---

##### `advancedEventSelectorInput`<sup>Optional</sup> <a name="advancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput"></a>

```typescript
public readonly advancedEventSelectorInput: IResolvable | CloudtrailEventDataStoreAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiRegionEnabledInput`<sup>Optional</sup> <a name="multiRegionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```typescript
public readonly multiRegionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationEnabledInput`<sup>Optional</sup> <a name="organizationEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```typescript
public readonly organizationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudtrailEventDataStoreTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiRegionEnabled`<sup>Required</sup> <a name="multiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```typescript
public readonly multiRegionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationEnabled`<sup>Required</sup> <a name="organizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```typescript
public readonly organizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelector <a name="CloudtrailEventDataStoreAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

const cloudtrailEventDataStoreAdvancedEventSelector: cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector">fieldSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |

---

##### `fieldSelector`<sup>Optional</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field_selector CloudtrailEventDataStore#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

const cloudtrailEventDataStoreAdvancedEventSelectorFieldSelector: cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith">endsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo">equalTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals">notEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith">startsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}.

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}.

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}.

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}.

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

const cloudtrailEventDataStoreConfig: cloudtrailEventDataStore.CloudtrailEventDataStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector">advancedEventSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">organizationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector"></a>

```typescript
public readonly advancedEventSelector: IResolvable | CloudtrailEventDataStoreAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiRegionEnabled`<sup>Optional</sup> <a name="multiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```typescript
public readonly multiRegionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `organizationEnabled`<sup>Optional</sup> <a name="organizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```typescript
public readonly organizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudtrailEventDataStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

### CloudtrailEventDataStoreTimeouts <a name="CloudtrailEventDataStoreTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

const cloudtrailEventDataStoreTimeouts: cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```typescript
public resetNotEndsWith(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```typescript
public resetNotStartsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```typescript
public readonly notEndsWithInput: string[];
```

- *Type:* string[]

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```typescript
public readonly notStartsWithInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a> | cdktf.IResolvable

---


### CloudtrailEventDataStoreAdvancedEventSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector">putFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector">resetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelector` <a name="putFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```typescript
public putFieldSelector(value: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]

---

##### `resetFieldSelector` <a name="resetFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector"></a>

```typescript
public resetFieldSelector(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector">fieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a>

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```typescript
public readonly fieldSelectorInput: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailEventDataStoreAdvancedEventSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a> | cdktf.IResolvable

---


### CloudtrailEventDataStoreTimeoutsOutputReference <a name="CloudtrailEventDataStoreTimeoutsOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktf/provider-aws'

new cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailEventDataStoreTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a> | cdktf.IResolvable

---



