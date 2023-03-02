# `dataAwsApigatewayv2Apis` Submodule <a name="`dataAwsApigatewayv2Apis` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Apis <a name="DataAwsApigatewayv2Apis" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis aws_apigatewayv2_apis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Apis } from '@cdktf/provider-aws'

new dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis(scope: Construct, id: string, config?: DataAwsApigatewayv2ApisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig">DataAwsApigatewayv2ApisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig">DataAwsApigatewayv2ApisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isConstruct"></a>

```typescript
import { dataAwsApigatewayv2Apis } from '@cdktf/provider-aws'

dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformElement"></a>

```typescript
import { dataAwsApigatewayv2Apis } from '@cdktf/provider-aws'

dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformDataSource"></a>

```typescript
import { dataAwsApigatewayv2Apis } from '@cdktf/provider-aws'

dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2Apis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ApisConfig <a name="DataAwsApigatewayv2ApisConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.Initializer"></a>

```typescript
import { dataAwsApigatewayv2Apis } from '@cdktf/provider-aws'

const dataAwsApigatewayv2ApisConfig: dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#id DataAwsApigatewayv2Apis#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#name DataAwsApigatewayv2Apis#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#protocol_type DataAwsApigatewayv2Apis#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#tags DataAwsApigatewayv2Apis#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#id DataAwsApigatewayv2Apis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#name DataAwsApigatewayv2Apis#name}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#protocol_type DataAwsApigatewayv2Apis#protocol_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Apis.DataAwsApigatewayv2ApisConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis#tags DataAwsApigatewayv2Apis#tags}.

---



