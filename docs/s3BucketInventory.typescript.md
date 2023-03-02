# `s3BucketInventory` Submodule <a name="`s3BucketInventory` Submodule" id="@cdktf/provider-aws.s3BucketInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketInventory <a name="S3BucketInventory" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory aws_s3_bucket_inventory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventory(scope: Construct, id: string, config: S3BucketInventoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig">S3BucketInventoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig">S3BucketInventoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields">resetOptionalFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination"></a>

```typescript
public putDestination(value: S3BucketInventoryDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter"></a>

```typescript
public putFilter(value: S3BucketInventoryFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule"></a>

```typescript
public putSchedule(value: S3BucketInventorySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOptionalFields` <a name="resetOptionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields"></a>

```typescript
public resetOptionalFields(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

s3BucketInventory.S3BucketInventory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

s3BucketInventory.S3BucketInventory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

s3BucketInventory.S3BucketInventory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput">includedObjectVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput">optionalFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions">includedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination"></a>

```typescript
public readonly destination: S3BucketInventoryDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter"></a>

```typescript
public readonly filter: S3BucketInventoryFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule"></a>

```typescript
public readonly schedule: S3BucketInventoryScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput"></a>

```typescript
public readonly destinationInput: S3BucketInventoryDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput"></a>

```typescript
public readonly filterInput: S3BucketInventoryFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includedObjectVersionsInput`<sup>Optional</sup> <a name="includedObjectVersionsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput"></a>

```typescript
public readonly includedObjectVersionsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionalFieldsInput`<sup>Optional</sup> <a name="optionalFieldsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput"></a>

```typescript
public readonly optionalFieldsInput: string[];
```

- *Type:* string[]

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: S3BucketInventorySchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions"></a>

```typescript
public readonly includedObjectVersions: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketInventoryConfig <a name="S3BucketInventoryConfig" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryConfig: s3BucketInventory.S3BucketInventoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions">includedObjectVersions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination"></a>

```typescript
public readonly destination: S3BucketInventoryDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions"></a>

```typescript
public readonly includedObjectVersions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule"></a>

```typescript
public readonly schedule: S3BucketInventorySchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter"></a>

```typescript
public readonly filter: S3BucketInventoryFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

### S3BucketInventoryDestination <a name="S3BucketInventoryDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryDestination: s3BucketInventory.S3BucketInventoryDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | bucket block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket"></a>

```typescript
public readonly bucket: S3BucketInventoryDestinationBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}

---

### S3BucketInventoryDestinationBucket <a name="S3BucketInventoryDestinationBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryDestinationBucket: s3BucketInventory.S3BucketInventoryDestinationBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption"></a>

```typescript
public readonly encryption: S3BucketInventoryDestinationBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#encryption S3BucketInventory#encryption}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventoryDestinationBucketEncryption <a name="S3BucketInventoryDestinationBucketEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryDestinationBucketEncryption: s3BucketInventory.S3BucketInventoryDestinationBucketEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms">sseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | sse_kms block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3">sseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | sse_s3 block. |

---

##### `sseKms`<sup>Optional</sup> <a name="sseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms"></a>

```typescript
public readonly sseKms: S3BucketInventoryDestinationBucketEncryptionSseKms;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

sse_kms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}

---

##### `sseS3`<sup>Optional</sup> <a name="sseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3"></a>

```typescript
public readonly sseS3: S3BucketInventoryDestinationBucketEncryptionSseS3;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

sse_s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}

---

### S3BucketInventoryDestinationBucketEncryptionSseKms <a name="S3BucketInventoryDestinationBucketEncryptionSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryDestinationBucketEncryptionSseKms: s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}.

---

### S3BucketInventoryDestinationBucketEncryptionSseS3 <a name="S3BucketInventoryDestinationBucketEncryptionSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryDestinationBucketEncryptionSseS3: s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3 = { ... }
```


### S3BucketInventoryFilter <a name="S3BucketInventoryFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventoryFilter: s3BucketInventory.S3BucketInventoryFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventorySchedule <a name="S3BucketInventorySchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

const s3BucketInventorySchedule: s3BucketInventory.S3BucketInventorySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketInventoryDestinationBucketEncryptionOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms">putSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3">putSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms">resetSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3">resetSseS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseKms` <a name="putSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms"></a>

```typescript
public putSseKms(value: S3BucketInventoryDestinationBucketEncryptionSseKms): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `putSseS3` <a name="putSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3"></a>

```typescript
public putSseS3(value: S3BucketInventoryDestinationBucketEncryptionSseS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `resetSseKms` <a name="resetSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms"></a>

```typescript
public resetSseKms(): void
```

##### `resetSseS3` <a name="resetSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3"></a>

```typescript
public resetSseS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms">sseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3">sseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput">sseKmsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input">sseS3Input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseKms`<sup>Required</sup> <a name="sseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms"></a>

```typescript
public readonly sseKms: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a>

---

##### `sseS3`<sup>Required</sup> <a name="sseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3"></a>

```typescript
public readonly sseS3: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a>

---

##### `sseKmsInput`<sup>Optional</sup> <a name="sseKmsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput"></a>

```typescript
public readonly sseKmsInput: S3BucketInventoryDestinationBucketEncryptionSseKms;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `sseS3Input`<sup>Optional</sup> <a name="sseS3Input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input"></a>

```typescript
public readonly sseS3Input: S3BucketInventoryDestinationBucketEncryptionSseS3;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryDestinationBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryDestinationBucketEncryptionSseKms;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryDestinationBucketEncryptionSseS3;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---


### S3BucketInventoryDestinationBucketOutputReference <a name="S3BucketInventoryDestinationBucketOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption"></a>

```typescript
public putEncryption(value: S3BucketInventoryDestinationBucketEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption"></a>

```typescript
public readonly encryption: S3BucketInventoryDestinationBucketEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: S3BucketInventoryDestinationBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryDestinationBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


### S3BucketInventoryDestinationOutputReference <a name="S3BucketInventoryDestinationOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket">putBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBucket` <a name="putBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket"></a>

```typescript
public putBucket(value: S3BucketInventoryDestinationBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: S3BucketInventoryDestinationBucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: S3BucketInventoryDestinationBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---


### S3BucketInventoryFilterOutputReference <a name="S3BucketInventoryFilterOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventoryFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---


### S3BucketInventoryScheduleOutputReference <a name="S3BucketInventoryScheduleOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer"></a>

```typescript
import { s3BucketInventory } from '@cdktf/provider-aws'

new s3BucketInventory.S3BucketInventoryScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketInventorySchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---



