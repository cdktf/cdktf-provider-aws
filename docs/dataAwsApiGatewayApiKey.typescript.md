# `dataAwsApiGatewayApiKey` Submodule <a name="`dataAwsApiGatewayApiKey` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayApiKey <a name="DataAwsApiGatewayApiKey" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key aws_api_gateway_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

new dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey(scope: Construct, id: string, config: DataAwsApiGatewayApiKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig">DataAwsApiGatewayApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig">DataAwsApiGatewayApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApiGatewayApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isConstruct"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformElement"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformDataSource"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsApiGatewayApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApiGatewayApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApiGatewayApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayApiKeyConfig <a name="DataAwsApiGatewayApiKeyConfig" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKey } from '@cdktf/provider-aws'

const dataAwsApiGatewayApiKeyConfig: dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#id DataAwsApiGatewayApiKey#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#tags DataAwsApiGatewayApiKey#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#id DataAwsApiGatewayApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#region DataAwsApiGatewayApiKey#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApiGatewayApiKey.DataAwsApiGatewayApiKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/api_gateway_api_key#tags DataAwsApiGatewayApiKey#tags}.

---



