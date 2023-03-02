# `dataAwsApiGatewayExport` Submodule <a name="`dataAwsApiGatewayExport` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayExport <a name="DataAwsApiGatewayExport" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export aws_api_gateway_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer"></a>

```typescript
import { dataAwsApiGatewayExport } from '@cdktf/provider-aws'

new dataAwsApiGatewayExport.DataAwsApiGatewayExport(scope: Construct, id: string, config: DataAwsApiGatewayExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig">DataAwsApiGatewayExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig">DataAwsApiGatewayExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetAccepts">resetAccepts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccepts` <a name="resetAccepts" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetAccepts"></a>

```typescript
public resetAccepts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.resetParameters"></a>

```typescript
public resetParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isConstruct"></a>

```typescript
import { dataAwsApiGatewayExport } from '@cdktf/provider-aws'

dataAwsApiGatewayExport.DataAwsApiGatewayExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformElement"></a>

```typescript
import { dataAwsApiGatewayExport } from '@cdktf/provider-aws'

dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformDataSource"></a>

```typescript
import { dataAwsApiGatewayExport } from '@cdktf/provider-aws'

dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.acceptsInput">acceptsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.exportTypeInput">exportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.accepts">accepts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.exportType">exportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `acceptsInput`<sup>Optional</sup> <a name="acceptsInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.acceptsInput"></a>

```typescript
public readonly acceptsInput: string;
```

- *Type:* string

---

##### `exportTypeInput`<sup>Optional</sup> <a name="exportTypeInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.exportTypeInput"></a>

```typescript
public readonly exportTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `accepts`<sup>Required</sup> <a name="accepts" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.accepts"></a>

```typescript
public readonly accepts: string;
```

- *Type:* string

---

##### `exportType`<sup>Required</sup> <a name="exportType" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.exportType"></a>

```typescript
public readonly exportType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayExportConfig <a name="DataAwsApiGatewayExportConfig" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.Initializer"></a>

```typescript
import { dataAwsApiGatewayExport } from '@cdktf/provider-aws'

const dataAwsApiGatewayExportConfig: dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.exportType">exportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#export_type DataAwsApiGatewayExport#export_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#rest_api_id DataAwsApiGatewayExport#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#stage_name DataAwsApiGatewayExport#stage_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.accepts">accepts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#accepts DataAwsApiGatewayExport#accepts}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#id DataAwsApiGatewayExport#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#parameters DataAwsApiGatewayExport#parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportType`<sup>Required</sup> <a name="exportType" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.exportType"></a>

```typescript
public readonly exportType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#export_type DataAwsApiGatewayExport#export_type}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#rest_api_id DataAwsApiGatewayExport#rest_api_id}.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#stage_name DataAwsApiGatewayExport#stage_name}.

---

##### `accepts`<sup>Optional</sup> <a name="accepts" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.accepts"></a>

```typescript
public readonly accepts: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#accepts DataAwsApiGatewayExport#accepts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#id DataAwsApiGatewayExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.dataAwsApiGatewayExport.DataAwsApiGatewayExportConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_export#parameters DataAwsApiGatewayExport#parameters}.

---



