# `dataAwsImagebuilderContainerRecipes` Submodule <a name="`dataAwsImagebuilderContainerRecipes` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderContainerRecipes <a name="DataAwsImagebuilderContainerRecipes" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes aws_imagebuilder_container_recipes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes(scope: Construct, id: string, config?: DataAwsImagebuilderContainerRecipesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig">DataAwsImagebuilderContainerRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig">DataAwsImagebuilderContainerRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsImagebuilderContainerRecipesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isConstruct"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList">DataAwsImagebuilderContainerRecipesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.filter"></a>

```typescript
public readonly filter: DataAwsImagebuilderContainerRecipesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList">DataAwsImagebuilderContainerRecipesFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsImagebuilderContainerRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderContainerRecipesConfig <a name="DataAwsImagebuilderContainerRecipesConfig" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipesConfig: dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#id DataAwsImagebuilderContainerRecipes#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#owner DataAwsImagebuilderContainerRecipes#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsImagebuilderContainerRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#filter DataAwsImagebuilderContainerRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#id DataAwsImagebuilderContainerRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#owner DataAwsImagebuilderContainerRecipes#owner}.

---

### DataAwsImagebuilderContainerRecipesFilter <a name="DataAwsImagebuilderContainerRecipesFilter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipesFilter: dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#name DataAwsImagebuilderContainerRecipes#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#values DataAwsImagebuilderContainerRecipes#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#name DataAwsImagebuilderContainerRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipes#values DataAwsImagebuilderContainerRecipes#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderContainerRecipesFilterList <a name="DataAwsImagebuilderContainerRecipesFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsImagebuilderContainerRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a>[]

---


### DataAwsImagebuilderContainerRecipesFilterOutputReference <a name="DataAwsImagebuilderContainerRecipesFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipesFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipes.DataAwsImagebuilderContainerRecipesFilter">DataAwsImagebuilderContainerRecipesFilter</a> | cdktf.IResolvable

---



