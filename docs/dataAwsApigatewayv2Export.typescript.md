# `dataAwsApigatewayv2Export` Submodule <a name="`dataAwsApigatewayv2Export` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Export"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Export <a name="DataAwsApigatewayv2Export" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export aws_apigatewayv2_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Export } from '@cdktf/provider-aws'

new dataAwsApigatewayv2Export.DataAwsApigatewayv2Export(scope: Construct, id: string, config: DataAwsApigatewayv2ExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion">resetExportVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions">resetIncludeExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName">resetStageName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExportVersion` <a name="resetExportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion"></a>

```typescript
public resetExportVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeExtensions` <a name="resetIncludeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions"></a>

```typescript
public resetIncludeExtensions(): void
```

##### `resetStageName` <a name="resetStageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName"></a>

```typescript
public resetStageName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct"></a>

```typescript
import { dataAwsApigatewayv2Export } from '@cdktf/provider-aws'

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement"></a>

```typescript
import { dataAwsApigatewayv2Export } from '@cdktf/provider-aws'

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource"></a>

```typescript
import { dataAwsApigatewayv2Export } from '@cdktf/provider-aws'

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput">exportVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput">includeExtensionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput">outputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput">specificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion">exportVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions">includeExtensions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification">specification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `exportVersionInput`<sup>Optional</sup> <a name="exportVersionInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput"></a>

```typescript
public readonly exportVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeExtensionsInput`<sup>Optional</sup> <a name="includeExtensionsInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput"></a>

```typescript
public readonly includeExtensionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput"></a>

```typescript
public readonly outputTypeInput: string;
```

- *Type:* string

---

##### `specificationInput`<sup>Optional</sup> <a name="specificationInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput"></a>

```typescript
public readonly specificationInput: string;
```

- *Type:* string

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `exportVersion`<sup>Required</sup> <a name="exportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion"></a>

```typescript
public readonly exportVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeExtensions`<sup>Required</sup> <a name="includeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions"></a>

```typescript
public readonly includeExtensions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ExportConfig <a name="DataAwsApigatewayv2ExportConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Export } from '@cdktf/provider-aws'

const dataAwsApigatewayv2ExportConfig: dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType">outputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification">specification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion">exportVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions">includeExtensions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}.

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}.

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}.

---

##### `exportVersion`<sup>Optional</sup> <a name="exportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion"></a>

```typescript
public readonly exportVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeExtensions`<sup>Optional</sup> <a name="includeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions"></a>

```typescript
public readonly includeExtensions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}.

---



