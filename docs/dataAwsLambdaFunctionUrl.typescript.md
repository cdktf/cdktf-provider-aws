# `dataAwsLambdaFunctionUrl` Submodule <a name="`dataAwsLambdaFunctionUrl` Submodule" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaFunctionUrl <a name="DataAwsLambdaFunctionUrl" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

new dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl(scope: Construct, id: string, config: DataAwsLambdaFunctionUrlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig">DataAwsLambdaFunctionUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig">DataAwsLambdaFunctionUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier"></a>

```typescript
public resetQualifier(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLambdaFunctionUrl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsLambdaFunctionUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLambdaFunctionUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLambdaFunctionUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLambdaFunctionUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl">functionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.invokeMode">invokeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId">urlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors"></a>

```typescript
public readonly cors: DataAwsLambdaFunctionUrlCorsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl"></a>

```typescript
public readonly functionUrl: string;
```

- *Type:* string

---

##### `invokeMode`<sup>Required</sup> <a name="invokeMode" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.invokeMode"></a>

```typescript
public readonly invokeMode: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `urlId`<sup>Required</sup> <a name="urlId" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId"></a>

```typescript
public readonly urlId: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaFunctionUrlConfig <a name="DataAwsLambdaFunctionUrlConfig" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.Initializer"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

const dataAwsLambdaFunctionUrlConfig: dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#id DataAwsLambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#id DataAwsLambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_function_url#region DataAwsLambdaFunctionUrl#region}

---

### DataAwsLambdaFunctionUrlCors <a name="DataAwsLambdaFunctionUrlCors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors.Initializer"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

const dataAwsLambdaFunctionUrlCors: dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaFunctionUrlCorsList <a name="DataAwsLambdaFunctionUrlCorsList" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

new dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get"></a>

```typescript
public get(index: number): DataAwsLambdaFunctionUrlCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdaFunctionUrlCorsOutputReference <a name="DataAwsLambdaFunctionUrlCorsOutputReference" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdaFunctionUrl } from '@cdktf/provider-aws'

new dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdaFunctionUrlCors;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a>

---



