# `dataAwsImagebuilderImageRecipes` Submodule <a name="`dataAwsImagebuilderImageRecipes` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderImageRecipes <a name="DataAwsImagebuilderImageRecipes" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes aws_imagebuilder_image_recipes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes(scope: Construct, id: string, config?: DataAwsImagebuilderImageRecipesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig">DataAwsImagebuilderImageRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig">DataAwsImagebuilderImageRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsImagebuilderImageRecipesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList">DataAwsImagebuilderImageRecipesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filter"></a>

```typescript
public readonly filter: DataAwsImagebuilderImageRecipesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList">DataAwsImagebuilderImageRecipesFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderImageRecipesConfig <a name="DataAwsImagebuilderImageRecipesConfig" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

const dataAwsImagebuilderImageRecipesConfig: dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#id DataAwsImagebuilderImageRecipes#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#owner DataAwsImagebuilderImageRecipes#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#filter DataAwsImagebuilderImageRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#id DataAwsImagebuilderImageRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#owner DataAwsImagebuilderImageRecipes#owner}.

---

### DataAwsImagebuilderImageRecipesFilter <a name="DataAwsImagebuilderImageRecipesFilter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

const dataAwsImagebuilderImageRecipesFilter: dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#name DataAwsImagebuilderImageRecipes#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#values DataAwsImagebuilderImageRecipes#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#name DataAwsImagebuilderImageRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes#values DataAwsImagebuilderImageRecipes#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderImageRecipesFilterList <a name="DataAwsImagebuilderImageRecipesFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderImageRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---


### DataAwsImagebuilderImageRecipesFilterOutputReference <a name="DataAwsImagebuilderImageRecipesFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/provider-aws'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderImageRecipesFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a> | cdktf.IResolvable

---



