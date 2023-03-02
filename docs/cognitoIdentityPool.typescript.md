# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktf/provider-aws.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

new cognitoIdentityPool.CognitoIdentityPool(scope: Construct, id: string, config: CognitoIdentityPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">putCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">resetAllowClassicFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities">resetAllowUnauthenticatedIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">resetCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">resetDeveloperProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns">resetOpenidConnectProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns">resetSamlProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">resetSupportedLoginProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCognitoIdentityProviders` <a name="putCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```typescript
public putCognitoIdentityProviders(value: IResolvable | CognitoIdentityPoolCognitoIdentityProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---

##### `resetAllowClassicFlow` <a name="resetAllowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```typescript
public resetAllowClassicFlow(): void
```

##### `resetAllowUnauthenticatedIdentities` <a name="resetAllowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities"></a>

```typescript
public resetAllowUnauthenticatedIdentities(): void
```

##### `resetCognitoIdentityProviders` <a name="resetCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```typescript
public resetCognitoIdentityProviders(): void
```

##### `resetDeveloperProviderName` <a name="resetDeveloperProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```typescript
public resetDeveloperProviderName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenidConnectProviderArns` <a name="resetOpenidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns"></a>

```typescript
public resetOpenidConnectProviderArns(): void
```

##### `resetSamlProviderArns` <a name="resetSamlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns"></a>

```typescript
public resetSamlProviderArns(): void
```

##### `resetSupportedLoginProviders` <a name="resetSupportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```typescript
public resetSupportedLoginProviders(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

cognitoIdentityPool.CognitoIdentityPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

cognitoIdentityPool.CognitoIdentityPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

cognitoIdentityPool.CognitoIdentityPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">allowClassicFlowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">allowUnauthenticatedIdentitiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">cognitoIdentityProvidersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">developerProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput">openidConnectProviderArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput">samlProviderArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">supportedLoginProvidersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">allowClassicFlow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">developerProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns">samlProviderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```typescript
public readonly cognitoIdentityProviders: CognitoIdentityPoolCognitoIdentityProvidersList;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `allowClassicFlowInput`<sup>Optional</sup> <a name="allowClassicFlowInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```typescript
public readonly allowClassicFlowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUnauthenticatedIdentitiesInput`<sup>Optional</sup> <a name="allowUnauthenticatedIdentitiesInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```typescript
public readonly allowUnauthenticatedIdentitiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cognitoIdentityProvidersInput`<sup>Optional</sup> <a name="cognitoIdentityProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```typescript
public readonly cognitoIdentityProvidersInput: IResolvable | CognitoIdentityPoolCognitoIdentityProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---

##### `developerProviderNameInput`<sup>Optional</sup> <a name="developerProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```typescript
public readonly developerProviderNameInput: string;
```

- *Type:* string

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```typescript
public readonly identityPoolNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `openidConnectProviderArnsInput`<sup>Optional</sup> <a name="openidConnectProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput"></a>

```typescript
public readonly openidConnectProviderArnsInput: string[];
```

- *Type:* string[]

---

##### `samlProviderArnsInput`<sup>Optional</sup> <a name="samlProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput"></a>

```typescript
public readonly samlProviderArnsInput: string[];
```

- *Type:* string[]

---

##### `supportedLoginProvidersInput`<sup>Optional</sup> <a name="supportedLoginProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```typescript
public readonly supportedLoginProvidersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowClassicFlow`<sup>Required</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```typescript
public readonly allowClassicFlow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```typescript
public readonly allowUnauthenticatedIdentities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `developerProviderName`<sup>Required</sup> <a name="developerProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```typescript
public readonly developerProviderName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

---

##### `openidConnectProviderArns`<sup>Required</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns"></a>

```typescript
public readonly openidConnectProviderArns: string[];
```

- *Type:* string[]

---

##### `samlProviderArns`<sup>Required</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns"></a>

```typescript
public readonly samlProviderArns: string[];
```

- *Type:* string[]

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```typescript
public readonly supportedLoginProviders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

const cognitoIdentityPoolCognitoIdentityProviders: cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `serverSideTokenCheck`<sup>Optional</sup> <a name="serverSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```typescript
public readonly serverSideTokenCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

const cognitoIdentityPoolConfig: cognitoIdentityPool.CognitoIdentityPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">allowClassicFlow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">developerProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns">samlProviderArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```typescript
public readonly allowClassicFlow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `allowUnauthenticatedIdentities`<sup>Optional</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```typescript
public readonly allowUnauthenticatedIdentities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```typescript
public readonly cognitoIdentityProviders: IResolvable | CognitoIdentityPoolCognitoIdentityProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `developerProviderName`<sup>Optional</sup> <a name="developerProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```typescript
public readonly developerProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openidConnectProviderArns`<sup>Optional</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns"></a>

```typescript
public readonly openidConnectProviderArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `samlProviderArns`<sup>Optional</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns"></a>

```typescript
public readonly samlProviderArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```typescript
public readonly supportedLoginProviders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

new cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```typescript
public get(index: number): CognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoIdentityPoolCognitoIdentityProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```typescript
import { cognitoIdentityPool } from '@cdktf/provider-aws'

new cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">resetServerSideTokenCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetServerSideTokenCheck` <a name="resetServerSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```typescript
public resetServerSideTokenCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">serverSideTokenCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `serverSideTokenCheckInput`<sup>Optional</sup> <a name="serverSideTokenCheckInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```typescript
public readonly serverSideTokenCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `serverSideTokenCheck`<sup>Required</sup> <a name="serverSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```typescript
public readonly serverSideTokenCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoIdentityPoolCognitoIdentityProviders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a> | cdktf.IResolvable

---



