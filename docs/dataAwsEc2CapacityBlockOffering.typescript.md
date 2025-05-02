# `dataAwsEc2CapacityBlockOffering` Submodule <a name="`dataAwsEc2CapacityBlockOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockOffering <a name="DataAwsEc2CapacityBlockOffering" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

new dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering(scope: Construct, id: string, config: DataAwsEc2CapacityBlockOfferingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange">resetEndDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange">resetStartDateRange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEndDateRange` <a name="resetEndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange"></a>

```typescript
public resetEndDateRange(): void
```

##### `resetStartDateRange` <a name="resetStartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange"></a>

```typescript
public resetStartDateRange(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2CapacityBlockOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee">upfrontFee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput">capacityDurationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput">endDateRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput">startDateRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours">capacityDurationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange">endDateRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange">startDateRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId"></a>

```typescript
public readonly capacityBlockOfferingId: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `upfrontFee`<sup>Required</sup> <a name="upfrontFee" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee"></a>

```typescript
public readonly upfrontFee: string;
```

- *Type:* string

---

##### `capacityDurationHoursInput`<sup>Optional</sup> <a name="capacityDurationHoursInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput"></a>

```typescript
public readonly capacityDurationHoursInput: number;
```

- *Type:* number

---

##### `endDateRangeInput`<sup>Optional</sup> <a name="endDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput"></a>

```typescript
public readonly endDateRangeInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `startDateRangeInput`<sup>Optional</sup> <a name="startDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput"></a>

```typescript
public readonly startDateRangeInput: string;
```

- *Type:* string

---

##### `capacityDurationHours`<sup>Required</sup> <a name="capacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours"></a>

```typescript
public readonly capacityDurationHours: number;
```

- *Type:* number

---

##### `endDateRange`<sup>Required</sup> <a name="endDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange"></a>

```typescript
public readonly endDateRange: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `startDateRange`<sup>Required</sup> <a name="startDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange"></a>

```typescript
public readonly startDateRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockOfferingConfig <a name="DataAwsEc2CapacityBlockOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockOffering } from '@cdktf/provider-aws'

const dataAwsEc2CapacityBlockOfferingConfig: dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours">capacityDurationHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange">endDateRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange">startDateRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityDurationHours`<sup>Required</sup> <a name="capacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours"></a>

```typescript
public readonly capacityDurationHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `endDateRange`<sup>Optional</sup> <a name="endDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange"></a>

```typescript
public readonly endDateRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `startDateRange`<sup>Optional</sup> <a name="startDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange"></a>

```typescript
public readonly startDateRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---



