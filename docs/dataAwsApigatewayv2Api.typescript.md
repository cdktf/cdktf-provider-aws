# `dataAwsApigatewayv2Api` Submodule <a name="`dataAwsApigatewayv2Api` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Api <a name="DataAwsApigatewayv2Api" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

new dataAwsApigatewayv2Api.DataAwsApigatewayv2Api(scope: Construct, id: string, config: DataAwsApigatewayv2ApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig">DataAwsApigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig">DataAwsApigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="apiKeySelectionExpression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression"></a>

```typescript
public readonly apiKeySelectionExpression: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: DataAwsApigatewayv2ApiCorsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="routeSelectionExpression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression"></a>

```typescript
public readonly routeSelectionExpression: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ApiConfig <a name="DataAwsApigatewayv2ApiConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

const dataAwsApigatewayv2ApiConfig: dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}.

---

### DataAwsApigatewayv2ApiCorsConfiguration <a name="DataAwsApigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

const dataAwsApigatewayv2ApiCorsConfiguration: dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApigatewayv2ApiCorsConfigurationList <a name="DataAwsApigatewayv2ApiCorsConfigurationList" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

new dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsApigatewayv2ApiCorsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsApigatewayv2ApiCorsConfigurationOutputReference <a name="DataAwsApigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Api } from '@cdktf/provider-aws'

new dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsApigatewayv2ApiCorsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a>

---



