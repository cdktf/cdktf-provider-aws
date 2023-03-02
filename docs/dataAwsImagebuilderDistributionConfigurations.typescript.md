# `dataAwsImagebuilderDistributionConfigurations` Submodule <a name="`dataAwsImagebuilderDistributionConfigurations` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderDistributionConfigurations <a name="DataAwsImagebuilderDistributionConfigurations" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations aws_imagebuilder_distribution_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations(scope: Construct, id: string, config?: DataAwsImagebuilderDistributionConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig">DataAwsImagebuilderDistributionConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig">DataAwsImagebuilderDistributionConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsImagebuilderDistributionConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter"></a>

```typescript
public readonly filter: DataAwsImagebuilderDistributionConfigurationsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsImagebuilderDistributionConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderDistributionConfigurationsConfig <a name="DataAwsImagebuilderDistributionConfigurationsConfig" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationsConfig: dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsImagebuilderDistributionConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#filter DataAwsImagebuilderDistributionConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsImagebuilderDistributionConfigurationsFilter <a name="DataAwsImagebuilderDistributionConfigurationsFilter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationsFilter: dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderDistributionConfigurationsFilterList <a name="DataAwsImagebuilderDistributionConfigurationsFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsImagebuilderDistributionConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---


### DataAwsImagebuilderDistributionConfigurationsFilterOutputReference <a name="DataAwsImagebuilderDistributionConfigurationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfigurations } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a> | cdktf.IResolvable

---



