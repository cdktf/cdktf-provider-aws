# `dataAwsApiGatewayApiKeys` Submodule <a name="`dataAwsApiGatewayApiKeys` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayApiKeys <a name="DataAwsApiGatewayApiKeys" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys aws_api_gateway_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

new dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys(scope: Construct, id: string, config?: DataAwsApiGatewayApiKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig">DataAwsApiGatewayApiKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig">DataAwsApiGatewayApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetCustomerId">resetCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetIncludeValues">resetIncludeValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCustomerId` <a name="resetCustomerId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetCustomerId"></a>

```typescript
public resetCustomerId(): void
```

##### `resetIncludeValues` <a name="resetIncludeValues" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.resetIncludeValues"></a>

```typescript
public resetIncludeValues(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApiGatewayApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isConstruct"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformElement"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformDataSource"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsApiGatewayApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApiGatewayApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApiGatewayApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList">DataAwsApiGatewayApiKeysItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.customerIdInput">customerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.includeValuesInput">includeValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.includeValues">includeValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.items"></a>

```typescript
public readonly items: DataAwsApiGatewayApiKeysItemsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList">DataAwsApiGatewayApiKeysItemsList</a>

---

##### `customerIdInput`<sup>Optional</sup> <a name="customerIdInput" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.customerIdInput"></a>

```typescript
public readonly customerIdInput: string;
```

- *Type:* string

---

##### `includeValuesInput`<sup>Optional</sup> <a name="includeValuesInput" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.includeValuesInput"></a>

```typescript
public readonly includeValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `includeValues`<sup>Required</sup> <a name="includeValues" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.includeValues"></a>

```typescript
public readonly includeValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayApiKeysConfig <a name="DataAwsApiGatewayApiKeysConfig" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

const dataAwsApiGatewayApiKeysConfig: dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.customerId">customerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys#customer_id DataAwsApiGatewayApiKeys#customer_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.includeValues">includeValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys#include_values DataAwsApiGatewayApiKeys#include_values}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys#customer_id DataAwsApiGatewayApiKeys#customer_id}.

---

##### `includeValues`<sup>Optional</sup> <a name="includeValues" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysConfig.property.includeValues"></a>

```typescript
public readonly includeValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/api_gateway_api_keys#include_values DataAwsApiGatewayApiKeys#include_values}.

---

### DataAwsApiGatewayApiKeysItems <a name="DataAwsApiGatewayApiKeysItems" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItems.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

const dataAwsApiGatewayApiKeysItems: dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApiGatewayApiKeysItemsList <a name="DataAwsApiGatewayApiKeysItemsList" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

new dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.get"></a>

```typescript
public get(index: number): DataAwsApiGatewayApiKeysItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsApiGatewayApiKeysItemsOutputReference <a name="DataAwsApiGatewayApiKeysItemsOutputReference" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer"></a>

```typescript
import { dataAwsApiGatewayApiKeys } from '@cdktf/provider-aws'

new dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.stageKeys">stageKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItems">DataAwsApiGatewayApiKeysItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stageKeys`<sup>Required</sup> <a name="stageKeys" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.stageKeys"></a>

```typescript
public readonly stageKeys: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsApiGatewayApiKeysItems;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayApiKeys.DataAwsApiGatewayApiKeysItems">DataAwsApiGatewayApiKeysItems</a>

---



