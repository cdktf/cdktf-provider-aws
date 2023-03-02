# `dataAwsCognitoUserPoolClient` Submodule <a name="`dataAwsCognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolClient <a name="DataAwsCognitoUserPoolClient" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

new dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient(scope: Construct, id: string, config: DataAwsCognitoUserPoolClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig">DataAwsCognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig">DataAwsCognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls">callbackUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret">generateSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls">logoutUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

---

##### `allowedOauthFlows`<sup>Required</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows"></a>

```typescript
public readonly allowedOauthFlows: string[];
```

- *Type:* string[]

---

##### `allowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClient: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowedOauthScopes`<sup>Required</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes"></a>

```typescript
public readonly allowedOauthScopes: string[];
```

- *Type:* string[]

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: DataAwsCognitoUserPoolClientAnalyticsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a>

---

##### `callbackUrls`<sup>Required</sup> <a name="callbackUrls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls"></a>

```typescript
public readonly callbackUrls: string[];
```

- *Type:* string[]

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

---

##### `generateSecret`<sup>Required</sup> <a name="generateSecret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret"></a>

```typescript
public readonly generateSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

---

##### `logoutUrls`<sup>Required</sup> <a name="logoutUrls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls"></a>

```typescript
public readonly logoutUrls: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: DataAwsCognitoUserPoolClientTokenValidityUnitsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a>

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfiguration <a name="DataAwsCognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

const dataAwsCognitoUserPoolClientAnalyticsConfiguration: dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration = { ... }
```


### DataAwsCognitoUserPoolClientConfig <a name="DataAwsCognitoUserPoolClientConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

const dataAwsCognitoUserPoolClientConfig: dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCognitoUserPoolClientTokenValidityUnits <a name="DataAwsCognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

const dataAwsCognitoUserPoolClientTokenValidityUnits: dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfigurationList <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

new dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

new dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```typescript
public readonly userDataShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a>

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsList <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

new dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get"></a>

```typescript
public get(index: number): DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolClient } from '@cdktf/provider-aws'

new dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a>

---



