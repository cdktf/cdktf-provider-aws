# `dataAwsImagebuilderContainerRecipe` Submodule <a name="`dataAwsImagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderContainerRecipe <a name="DataAwsImagebuilderContainerRecipe" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe(scope: Construct, id: string, config: DataAwsImagebuilderContainerRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig">DataAwsImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig">DataAwsImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData">dockerfileTemplateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage">parentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component"></a>

```typescript
public readonly component: DataAwsImagebuilderContainerRecipeComponentList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a>

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dockerfileTemplateData`<sup>Required</sup> <a name="dockerfileTemplateData" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```typescript
public readonly dockerfileTemplateData: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `instanceConfiguration`<sup>Required</sup> <a name="instanceConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```typescript
public readonly instanceConfiguration: DataAwsImagebuilderContainerRecipeInstanceConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository"></a>

```typescript
public readonly targetRepository: DataAwsImagebuilderContainerRecipeTargetRepositoryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderContainerRecipeComponent <a name="DataAwsImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeComponent: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent = { ... }
```


### DataAwsImagebuilderContainerRecipeComponentParameter <a name="DataAwsImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeComponentParameter: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter = { ... }
```


### DataAwsImagebuilderContainerRecipeConfig <a name="DataAwsImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeConfig: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}.

---

### DataAwsImagebuilderContainerRecipeInstanceConfiguration <a name="DataAwsImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeInstanceConfiguration: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration = { ... }
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping = { ... }
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs = { ... }
```


### DataAwsImagebuilderContainerRecipeTargetRepository <a name="DataAwsImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

const dataAwsImagebuilderContainerRecipeTargetRepository: dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderContainerRecipeComponentList <a name="DataAwsImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeComponentOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn">componentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```typescript
public readonly componentArn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```typescript
public readonly parameter: DataAwsImagebuilderContainerRecipeComponentParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeComponent;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a>

---


### DataAwsImagebuilderContainerRecipeComponentParameterList <a name="DataAwsImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeComponentParameterOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeComponentParameter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">blockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDeviceMapping`<sup>Required</sup> <a name="blockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```typescript
public readonly blockDeviceMapping: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeInstanceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a>

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryList <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderContainerRecipe } from '@cdktf/provider-aws'

new dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderContainerRecipeTargetRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a>

---



