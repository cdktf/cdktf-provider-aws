# `dataAwsElasticacheUser` Submodule <a name="`dataAwsElasticacheUser` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheUser <a name="DataAwsElasticacheUser" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user aws_elasticache_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

new dataAwsElasticacheUser.DataAwsElasticacheUser(scope: Construct, id: string, config: DataAwsElasticacheUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig">DataAwsElasticacheUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig">DataAwsElasticacheUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode">putAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAccessString">resetAccessString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetNoPasswordRequired">resetNoPasswordRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetPasswords">resetPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthenticationMode` <a name="putAuthenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode"></a>

```typescript
public putAuthenticationMode(value: IResolvable | DataAwsElasticacheUserAuthenticationMode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]

---

##### `resetAccessString` <a name="resetAccessString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAccessString"></a>

```typescript
public resetAccessString(): void
```

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNoPasswordRequired` <a name="resetNoPasswordRequired" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetNoPasswordRequired"></a>

```typescript
public resetNoPasswordRequired(): void
```

##### `resetPasswords` <a name="resetPasswords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetPasswords"></a>

```typescript
public resetPasswords(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElasticacheUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElasticacheUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationMode">authenticationMode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList">DataAwsElasticacheUserAuthenticationModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessStringInput">accessStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationModeInput">authenticationModeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequiredInput">noPasswordRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwordsInput">passwordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessString">accessString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequired">noPasswordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwords">passwords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: DataAwsElasticacheUserAuthenticationModeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList">DataAwsElasticacheUserAuthenticationModeList</a>

---

##### `accessStringInput`<sup>Optional</sup> <a name="accessStringInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessStringInput"></a>

```typescript
public readonly accessStringInput: string;
```

- *Type:* string

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: IResolvable | DataAwsElasticacheUserAuthenticationMode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `noPasswordRequiredInput`<sup>Optional</sup> <a name="noPasswordRequiredInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequiredInput"></a>

```typescript
public readonly noPasswordRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordsInput`<sup>Optional</sup> <a name="passwordsInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwordsInput"></a>

```typescript
public readonly passwordsInput: string[];
```

- *Type:* string[]

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `accessString`<sup>Required</sup> <a name="accessString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessString"></a>

```typescript
public readonly accessString: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noPasswordRequired`<sup>Required</sup> <a name="noPasswordRequired" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequired"></a>

```typescript
public readonly noPasswordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwords`<sup>Required</sup> <a name="passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwords"></a>

```typescript
public readonly passwords: string[];
```

- *Type:* string[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheUserAuthenticationMode <a name="DataAwsElasticacheUserAuthenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.Initializer"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

const dataAwsElasticacheUserAuthenticationMode: dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.passwordCount">passwordCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}. |

---

##### `passwordCount`<sup>Optional</sup> <a name="passwordCount" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.passwordCount"></a>

```typescript
public readonly passwordCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}.

---

### DataAwsElasticacheUserConfig <a name="DataAwsElasticacheUserConfig" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.Initializer"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

const dataAwsElasticacheUserConfig: dataAwsElasticacheUser.DataAwsElasticacheUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.accessString">accessString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.authenticationMode">authenticationMode</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]</code> | authentication_mode block. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.noPasswordRequired">noPasswordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.passwords">passwords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}.

---

##### `accessString`<sup>Optional</sup> <a name="accessString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.accessString"></a>

```typescript
public readonly accessString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: IResolvable | DataAwsElasticacheUserAuthenticationMode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]

authentication_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#authentication_mode DataAwsElasticacheUser#authentication_mode}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noPasswordRequired`<sup>Optional</sup> <a name="noPasswordRequired" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.noPasswordRequired"></a>

```typescript
public readonly noPasswordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}.

---

##### `passwords`<sup>Optional</sup> <a name="passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.passwords"></a>

```typescript
public readonly passwords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheUserAuthenticationModeList <a name="DataAwsElasticacheUserAuthenticationModeList" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

new dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get"></a>

```typescript
public get(index: number): DataAwsElasticacheUserAuthenticationModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsElasticacheUserAuthenticationMode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>[]

---


### DataAwsElasticacheUserAuthenticationModeOutputReference <a name="DataAwsElasticacheUserAuthenticationModeOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticacheUser } from '@cdktf/provider-aws'

new dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetPasswordCount">resetPasswordCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordCount` <a name="resetPasswordCount" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetPasswordCount"></a>

```typescript
public resetPasswordCount(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCountInput">passwordCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCount">passwordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordCountInput`<sup>Optional</sup> <a name="passwordCountInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCountInput"></a>

```typescript
public readonly passwordCountInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `passwordCount`<sup>Required</sup> <a name="passwordCount" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCount"></a>

```typescript
public readonly passwordCount: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsElasticacheUserAuthenticationMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>

---



