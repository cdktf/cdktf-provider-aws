# `dataAwsLaunchTemplate` Submodule <a name="`dataAwsLaunchTemplate` Submodule" id="@cdktf/provider-aws.dataAwsLaunchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLaunchTemplate <a name="DataAwsLaunchTemplate" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplate(scope: Construct, id: string, config?: DataAwsLaunchTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig">DataAwsLaunchTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig">DataAwsLaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsLaunchTemplateFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsLaunchTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion">defaultVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop">disableApiStop</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination">disableApiTermination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized">ebsOptimized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList">DataAwsLaunchTemplateElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList">DataAwsLaunchTemplateElasticInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification">licenseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: DataAwsLaunchTemplateBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a>

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: DataAwsLaunchTemplateCapacityReservationSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: DataAwsLaunchTemplateCpuOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: DataAwsLaunchTemplateCreditSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a>

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: string;
```

- *Type:* string

---

##### `elasticGpuSpecifications`<sup>Required</sup> <a name="elasticGpuSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: DataAwsLaunchTemplateElasticGpuSpecificationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList">DataAwsLaunchTemplateElasticGpuSpecificationsList</a>

---

##### `elasticInferenceAccelerator`<sup>Required</sup> <a name="elasticInferenceAccelerator" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: DataAwsLaunchTemplateElasticInferenceAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList">DataAwsLaunchTemplateElasticInferenceAcceleratorList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: DataAwsLaunchTemplateEnclaveOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter"></a>

```typescript
public readonly filter: DataAwsLaunchTemplateFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: DataAwsLaunchTemplateHibernationOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: DataAwsLaunchTemplateIamInstanceProfileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: DataAwsLaunchTemplateInstanceMarketOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsLaunchTemplateInstanceRequirementsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `licenseSpecification`<sup>Required</sup> <a name="licenseSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification"></a>

```typescript
public readonly licenseSpecification: DataAwsLaunchTemplateLicenseSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: DataAwsLaunchTemplateMaintenanceOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: DataAwsLaunchTemplateMetadataOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring"></a>

```typescript
public readonly monitoring: DataAwsLaunchTemplateMonitoringList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataAwsLaunchTemplateNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement"></a>

```typescript
public readonly placement: DataAwsLaunchTemplatePlacementList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a>

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: DataAwsLaunchTemplatePrivateDnsNameOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a>

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsLaunchTemplateTagSpecificationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsLaunchTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsLaunchTemplateFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsLaunchTemplateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLaunchTemplateBlockDeviceMappings <a name="DataAwsLaunchTemplateBlockDeviceMappings" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateBlockDeviceMappings: dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings = { ... }
```


### DataAwsLaunchTemplateBlockDeviceMappingsEbs <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateBlockDeviceMappingsEbs: dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs = { ... }
```


### DataAwsLaunchTemplateCapacityReservationSpecification <a name="DataAwsLaunchTemplateCapacityReservationSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateCapacityReservationSpecification: dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification = { ... }
```


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget: dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget = { ... }
```


### DataAwsLaunchTemplateConfig <a name="DataAwsLaunchTemplateConfig" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateConfig: dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#id DataAwsLaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#tags DataAwsLaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsLaunchTemplateFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#filter DataAwsLaunchTemplate#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#id DataAwsLaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#tags DataAwsLaunchTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsLaunchTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#timeouts DataAwsLaunchTemplate#timeouts}

---

### DataAwsLaunchTemplateCpuOptions <a name="DataAwsLaunchTemplateCpuOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateCpuOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions = { ... }
```


### DataAwsLaunchTemplateCreditSpecification <a name="DataAwsLaunchTemplateCreditSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateCreditSpecification: dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification = { ... }
```


### DataAwsLaunchTemplateElasticGpuSpecifications <a name="DataAwsLaunchTemplateElasticGpuSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateElasticGpuSpecifications: dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications = { ... }
```


### DataAwsLaunchTemplateElasticInferenceAccelerator <a name="DataAwsLaunchTemplateElasticInferenceAccelerator" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateElasticInferenceAccelerator: dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator = { ... }
```


### DataAwsLaunchTemplateEnclaveOptions <a name="DataAwsLaunchTemplateEnclaveOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateEnclaveOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions = { ... }
```


### DataAwsLaunchTemplateFilter <a name="DataAwsLaunchTemplateFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateFilter: dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#values DataAwsLaunchTemplate#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#values DataAwsLaunchTemplate#values}.

---

### DataAwsLaunchTemplateHibernationOptions <a name="DataAwsLaunchTemplateHibernationOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateHibernationOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions = { ... }
```


### DataAwsLaunchTemplateIamInstanceProfile <a name="DataAwsLaunchTemplateIamInstanceProfile" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateIamInstanceProfile: dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile = { ... }
```


### DataAwsLaunchTemplateInstanceMarketOptions <a name="DataAwsLaunchTemplateInstanceMarketOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceMarketOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions = { ... }
```


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceMarketOptionsSpotOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = { ... }
```


### DataAwsLaunchTemplateInstanceRequirements <a name="DataAwsLaunchTemplateInstanceRequirements" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirements: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsAcceleratorCount: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsMemoryMib: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb = { ... }
```


### DataAwsLaunchTemplateInstanceRequirementsVcpuCount <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateInstanceRequirementsVcpuCount: dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount = { ... }
```


### DataAwsLaunchTemplateLicenseSpecification <a name="DataAwsLaunchTemplateLicenseSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateLicenseSpecification: dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification = { ... }
```


### DataAwsLaunchTemplateMaintenanceOptions <a name="DataAwsLaunchTemplateMaintenanceOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateMaintenanceOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions = { ... }
```


### DataAwsLaunchTemplateMetadataOptions <a name="DataAwsLaunchTemplateMetadataOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateMetadataOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions = { ... }
```


### DataAwsLaunchTemplateMonitoring <a name="DataAwsLaunchTemplateMonitoring" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateMonitoring: dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring = { ... }
```


### DataAwsLaunchTemplateNetworkInterfaces <a name="DataAwsLaunchTemplateNetworkInterfaces" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateNetworkInterfaces: dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces = { ... }
```


### DataAwsLaunchTemplatePlacement <a name="DataAwsLaunchTemplatePlacement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplatePlacement: dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement = { ... }
```


### DataAwsLaunchTemplatePrivateDnsNameOptions <a name="DataAwsLaunchTemplatePrivateDnsNameOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplatePrivateDnsNameOptions: dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions = { ... }
```


### DataAwsLaunchTemplateTagSpecifications <a name="DataAwsLaunchTemplateTagSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateTagSpecifications: dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications = { ... }
```


### DataAwsLaunchTemplateTimeouts <a name="DataAwsLaunchTemplateTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

const dataAwsLaunchTemplateTimeouts: dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#read DataAwsLaunchTemplate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#read DataAwsLaunchTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLaunchTemplateBlockDeviceMappingsEbsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a>

---


### DataAwsLaunchTemplateBlockDeviceMappingsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateBlockDeviceMappingsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsLaunchTemplateBlockDeviceMappingsEbsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateBlockDeviceMappings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a>

---


### DataAwsLaunchTemplateCpuOptionsList <a name="DataAwsLaunchTemplateCpuOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateCpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateCpuOptionsOutputReference <a name="DataAwsLaunchTemplateCpuOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateCpuOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a>

---


### DataAwsLaunchTemplateCreditSpecificationList <a name="DataAwsLaunchTemplateCreditSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateCreditSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateCreditSpecificationOutputReference <a name="DataAwsLaunchTemplateCreditSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateCreditSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a>

---


### DataAwsLaunchTemplateElasticGpuSpecificationsList <a name="DataAwsLaunchTemplateElasticGpuSpecificationsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference <a name="DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications">DataAwsLaunchTemplateElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateElasticGpuSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications">DataAwsLaunchTemplateElasticGpuSpecifications</a>

---


### DataAwsLaunchTemplateElasticInferenceAcceleratorList <a name="DataAwsLaunchTemplateElasticInferenceAcceleratorList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference <a name="DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator">DataAwsLaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateElasticInferenceAccelerator;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator">DataAwsLaunchTemplateElasticInferenceAccelerator</a>

---


### DataAwsLaunchTemplateEnclaveOptionsList <a name="DataAwsLaunchTemplateEnclaveOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateEnclaveOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateEnclaveOptionsOutputReference <a name="DataAwsLaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateEnclaveOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a>

---


### DataAwsLaunchTemplateFilterList <a name="DataAwsLaunchTemplateFilterList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsLaunchTemplateFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>[]

---


### DataAwsLaunchTemplateFilterOutputReference <a name="DataAwsLaunchTemplateFilterOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a> | cdktf.IResolvable

---


### DataAwsLaunchTemplateHibernationOptionsList <a name="DataAwsLaunchTemplateHibernationOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateHibernationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateHibernationOptionsOutputReference <a name="DataAwsLaunchTemplateHibernationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```typescript
public readonly configured: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateHibernationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a>

---


### DataAwsLaunchTemplateIamInstanceProfileList <a name="DataAwsLaunchTemplateIamInstanceProfileList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateIamInstanceProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateIamInstanceProfileOutputReference <a name="DataAwsLaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateIamInstanceProfile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceMarketOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">marketType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `marketType`<sup>Required</sup> <a name="marketType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```typescript
public readonly marketType: string;
```

- *Type:* string

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```typescript
public readonly spotOptions: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceMarketOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">maxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spotInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```typescript
public readonly maxPrice: string;
```

- *Type:* string

---

##### `spotInstanceType`<sup>Required</sup> <a name="spotInstanceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```typescript
public readonly spotInstanceType: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsLaunchTemplateInstanceRequirementsList <a name="DataAwsLaunchTemplateInstanceRequirementsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsMemoryMib;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```typescript
public readonly acceleratorManufacturers: string[];
```

- *Type:* string[]

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```typescript
public readonly acceleratorNames: string[];
```

- *Type:* string[]

---

##### `acceleratorTotalMemoryMib`<sup>Required</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```typescript
public readonly acceleratorTotalMemoryMib: DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```typescript
public readonly acceleratorTypes: string[];
```

- *Type:* string[]

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```typescript
public readonly bareMetal: string;
```

- *Type:* string

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```typescript
public readonly baselineEbsBandwidthMbps: DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a>

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```typescript
public readonly burstablePerformance: string;
```

- *Type:* string

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```typescript
public readonly cpuManufacturers: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```typescript
public readonly instanceGenerations: string[];
```

- *Type:* string[]

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```typescript
public readonly localStorage: string;
```

- *Type:* string

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```typescript
public readonly localStorageTypes: string[];
```

- *Type:* string[]

---

##### `memoryGibPerVcpu`<sup>Required</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```typescript
public readonly memoryGibPerVcpu: DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a>

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```typescript
public readonly memoryMib: DataAwsLaunchTemplateInstanceRequirementsMemoryMibList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```typescript
public readonly networkInterfaceCount: DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly onDemandMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```typescript
public readonly requireHibernateSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly spotMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```typescript
public readonly totalLocalStorageGb: DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a>

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```typescript
public readonly vcpuCount: DataAwsLaunchTemplateInstanceRequirementsVcpuCountList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirements;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a>

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountList <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateInstanceRequirementsVcpuCount;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a>

---


### DataAwsLaunchTemplateLicenseSpecificationList <a name="DataAwsLaunchTemplateLicenseSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateLicenseSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateLicenseSpecificationOutputReference <a name="DataAwsLaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateLicenseSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a>

---


### DataAwsLaunchTemplateMaintenanceOptionsList <a name="DataAwsLaunchTemplateMaintenanceOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateMaintenanceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateMaintenanceOptionsOutputReference <a name="DataAwsLaunchTemplateMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateMaintenanceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a>

---


### DataAwsLaunchTemplateMetadataOptionsList <a name="DataAwsLaunchTemplateMetadataOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateMetadataOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateMetadataOptionsOutputReference <a name="DataAwsLaunchTemplateMetadataOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a>

---


### DataAwsLaunchTemplateMonitoringList <a name="DataAwsLaunchTemplateMonitoringList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateMonitoringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateMonitoringOutputReference <a name="DataAwsLaunchTemplateMonitoringOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateMonitoring;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a>

---


### DataAwsLaunchTemplateNetworkInterfacesList <a name="DataAwsLaunchTemplateNetworkInterfacesList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateNetworkInterfacesOutputReference <a name="DataAwsLaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">ipv4AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

---

##### `ipv4AddressCount`<sup>Required</sup> <a name="ipv4AddressCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```typescript
public readonly ipv4AddressCount: number;
```

- *Type:* number

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```typescript
public readonly ipv4PrefixCount: number;
```

- *Type:* number

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```typescript
public readonly ipv4Prefixes: string[];
```

- *Type:* string[]

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```typescript
public readonly ipv6PrefixCount: number;
```

- *Type:* number

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```typescript
public readonly ipv6Prefixes: string[];
```

- *Type:* string[]

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateNetworkInterfaces;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a>

---


### DataAwsLaunchTemplatePlacementList <a name="DataAwsLaunchTemplatePlacementList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplatePlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplatePlacementOutputReference <a name="DataAwsLaunchTemplatePlacementOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity">affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain">spreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

---

##### `spreadDomain`<sup>Required</sup> <a name="spreadDomain" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```typescript
public readonly spreadDomain: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplatePlacement;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a>

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsList <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplatePrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a>

---


### DataAwsLaunchTemplateTagSpecificationsList <a name="DataAwsLaunchTemplateTagSpecificationsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsLaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLaunchTemplateTagSpecificationsOutputReference <a name="DataAwsLaunchTemplateTagSpecificationsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateTagSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a>

---


### DataAwsLaunchTemplateTimeoutsOutputReference <a name="DataAwsLaunchTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsLaunchTemplate } from '@cdktf/provider-aws'

new dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLaunchTemplateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a> | cdktf.IResolvable

---



