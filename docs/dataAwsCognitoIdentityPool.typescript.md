# `dataAwsCognitoIdentityPool` Submodule <a name="`dataAwsCognitoIdentityPool` Submodule" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoIdentityPool <a name="DataAwsCognitoIdentityPool" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

new dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool(scope: Construct, id: string, config: DataAwsCognitoIdentityPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig">DataAwsCognitoIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig">DataAwsCognitoIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCognitoIdentityPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCognitoIdentityPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCognitoIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow">allowClassicFlow</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName">developerProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns">samlProviderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowClassicFlow`<sup>Required</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow"></a>

```typescript
public readonly allowClassicFlow: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```typescript
public readonly allowUnauthenticatedIdentities: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders"></a>

```typescript
public readonly cognitoIdentityProviders: DataAwsCognitoIdentityPoolCognitoIdentityProvidersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `developerProviderName`<sup>Required</sup> <a name="developerProviderName" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName"></a>

```typescript
public readonly developerProviderName: string;
```

- *Type:* string

---

##### `openidConnectProviderArns`<sup>Required</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns"></a>

```typescript
public readonly openidConnectProviderArns: string[];
```

- *Type:* string[]

---

##### `samlProviderArns`<sup>Required</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns"></a>

```typescript
public readonly samlProviderArns: string[];
```

- *Type:* string[]

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders"></a>

```typescript
public readonly supportedLoginProviders: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput"></a>

```typescript
public readonly identityPoolNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProviders <a name="DataAwsCognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

const dataAwsCognitoIdentityPoolCognitoIdentityProviders: dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders = { ... }
```


### DataAwsCognitoIdentityPoolConfig <a name="DataAwsCognitoIdentityPoolConfig" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.Initializer"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

const dataAwsCognitoIdentityPoolConfig: dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProvidersList <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

new dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```typescript
public get(index: number): DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```typescript
import { dataAwsCognitoIdentityPool } from '@cdktf/provider-aws'

new dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `serverSideTokenCheck`<sup>Required</sup> <a name="serverSideTokenCheck" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```typescript
public readonly serverSideTokenCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCognitoIdentityPoolCognitoIdentityProviders;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a>

---



