# `dataAwsSagemakerPrebuiltEcrImage` Submodule <a name="`dataAwsSagemakerPrebuiltEcrImage` Submodule" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerPrebuiltEcrImage <a name="DataAwsSagemakerPrebuiltEcrImage" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image aws_sagemaker_prebuilt_ecr_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer"></a>

```typescript
import { dataAwsSagemakerPrebuiltEcrImage } from '@cdktf/provider-aws'

new dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage(scope: Construct, id: string, config: DataAwsSagemakerPrebuiltEcrImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig">DataAwsSagemakerPrebuiltEcrImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig">DataAwsSagemakerPrebuiltEcrImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix">resetDnsSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag">resetImageTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDnsSuffix` <a name="resetDnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix"></a>

```typescript
public resetDnsSuffix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageTag` <a name="resetImageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag"></a>

```typescript
public resetImageTag(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct"></a>

```typescript
import { dataAwsSagemakerPrebuiltEcrImage } from '@cdktf/provider-aws'

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement"></a>

```typescript
import { dataAwsSagemakerPrebuiltEcrImage } from '@cdktf/provider-aws'

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource"></a>

```typescript
import { dataAwsSagemakerPrebuiltEcrImage } from '@cdktf/provider-aws'

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath">registryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput">dnsSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput">imageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `registryPath`<sup>Required</sup> <a name="registryPath" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath"></a>

```typescript
public readonly registryPath: string;
```

- *Type:* string

---

##### `dnsSuffixInput`<sup>Optional</sup> <a name="dnsSuffixInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput"></a>

```typescript
public readonly dnsSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageTagInput`<sup>Optional</sup> <a name="imageTagInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput"></a>

```typescript
public readonly imageTagInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageTag`<sup>Required</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerPrebuiltEcrImageConfig <a name="DataAwsSagemakerPrebuiltEcrImageConfig" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.Initializer"></a>

```typescript
import { dataAwsSagemakerPrebuiltEcrImage } from '@cdktf/provider-aws'

const dataAwsSagemakerPrebuiltEcrImageConfig: dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag">imageTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}.

---

##### `dnsSuffix`<sup>Optional</sup> <a name="dnsSuffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}.

---



