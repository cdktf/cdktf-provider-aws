# `dataAwsResourceexplorer2Search` Submodule <a name="`dataAwsResourceexplorer2Search` Submodule" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourceexplorer2Search <a name="DataAwsResourceexplorer2Search" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search(scope: Construct, id: string, config: DataAwsResourceexplorer2SearchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig">DataAwsResourceexplorer2SearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig">DataAwsResourceexplorer2SearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn">resetViewArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetViewArn` <a name="resetViewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn"></a>

```typescript
public resetViewArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsResourceexplorer2Search to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsResourceexplorer2Search that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount">resourceCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput">viewArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn">viewArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount"></a>

```typescript
public readonly resourceCount: DataAwsResourceexplorer2SearchResourceCountList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources"></a>

```typescript
public readonly resources: DataAwsResourceexplorer2SearchResourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `viewArnInput`<sup>Optional</sup> <a name="viewArnInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput"></a>

```typescript
public readonly viewArnInput: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `viewArn`<sup>Required</sup> <a name="viewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn"></a>

```typescript
public readonly viewArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourceexplorer2SearchConfig <a name="DataAwsResourceexplorer2SearchConfig" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

const dataAwsResourceexplorer2SearchConfig: dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn">viewArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `viewArn`<sup>Optional</sup> <a name="viewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn"></a>

```typescript
public readonly viewArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

### DataAwsResourceexplorer2SearchResourceCount <a name="DataAwsResourceexplorer2SearchResourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

const dataAwsResourceexplorer2SearchResourceCount: dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount = { ... }
```


### DataAwsResourceexplorer2SearchResources <a name="DataAwsResourceexplorer2SearchResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

const dataAwsResourceexplorer2SearchResources: dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources = { ... }
```


### DataAwsResourceexplorer2SearchResourcesProperties <a name="DataAwsResourceexplorer2SearchResourcesProperties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

const dataAwsResourceexplorer2SearchResourcesProperties: dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourceexplorer2SearchResourceCountList <a name="DataAwsResourceexplorer2SearchResourceCountList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get"></a>

```typescript
public get(index: number): DataAwsResourceexplorer2SearchResourceCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResourceexplorer2SearchResourceCountOutputReference <a name="DataAwsResourceexplorer2SearchResourceCountOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete">complete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources">totalResources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complete`<sup>Required</sup> <a name="complete" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete"></a>

```typescript
public readonly complete: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `totalResources`<sup>Required</sup> <a name="totalResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources"></a>

```typescript
public readonly totalResources: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResourceexplorer2SearchResourceCount;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a>

---


### DataAwsResourceexplorer2SearchResourcesList <a name="DataAwsResourceexplorer2SearchResourcesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get"></a>

```typescript
public get(index: number): DataAwsResourceexplorer2SearchResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResourceexplorer2SearchResourcesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt">lastReportedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId">owningAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `lastReportedAt`<sup>Required</sup> <a name="lastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt"></a>

```typescript
public readonly lastReportedAt: string;
```

- *Type:* string

---

##### `owningAccountId`<sup>Required</sup> <a name="owningAccountId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId"></a>

```typescript
public readonly owningAccountId: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties"></a>

```typescript
public readonly properties: DataAwsResourceexplorer2SearchResourcesPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResourceexplorer2SearchResources;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a>

---


### DataAwsResourceexplorer2SearchResourcesPropertiesList <a name="DataAwsResourceexplorer2SearchResourcesPropertiesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsResourceexplorer2Search } from '@cdktf/provider-aws'

new dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt">lastReportedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `lastReportedAt`<sup>Required</sup> <a name="lastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt"></a>

```typescript
public readonly lastReportedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResourceexplorer2SearchResourcesProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a>

---



