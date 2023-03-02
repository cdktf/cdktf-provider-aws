# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktf/provider-aws.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

new apigatewayv2Route.Apigatewayv2Route(scope: Construct, id: string, config: Apigatewayv2RouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter">putRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter">resetRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">resetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRequestParameter` <a name="putRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter"></a>

```typescript
public putRequestParameter(value: IResolvable | Apigatewayv2RouteRequestParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```typescript
public resetApiKeyRequired(): void
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```typescript
public resetAuthorizationScopes(): void
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```typescript
public resetAuthorizationType(): void
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```typescript
public resetModelSelectionExpression(): void
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```typescript
public resetOperationName(): void
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```typescript
public resetRequestModels(): void
```

##### `resetRequestParameter` <a name="resetRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter"></a>

```typescript
public resetRequestParameter(): void
```

##### `resetRouteResponseSelectionExpression` <a name="resetRouteResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```typescript
public resetRouteResponseSelectionExpression(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```typescript
public resetTarget(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

apigatewayv2Route.Apigatewayv2Route.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

apigatewayv2Route.Apigatewayv2Route.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

apigatewayv2Route.Apigatewayv2Route.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter">requestParameter</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">operationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">requestModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput">requestParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">routeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">routeResponseSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey">routeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `requestParameter`<sup>Required</sup> <a name="requestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter"></a>

```typescript
public readonly requestParameter: Apigatewayv2RouteRequestParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```typescript
public readonly apiKeyRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```typescript
public readonly authorizationScopesInput: string[];
```

- *Type:* string[]

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```typescript
public readonly modelSelectionExpressionInput: string;
```

- *Type:* string

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```typescript
public readonly operationNameInput: string;
```

- *Type:* string

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```typescript
public readonly requestModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParameterInput`<sup>Optional</sup> <a name="requestParameterInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput"></a>

```typescript
public readonly requestParameterInput: IResolvable | Apigatewayv2RouteRequestParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* string

---

##### `routeResponseSelectionExpressionInput`<sup>Optional</sup> <a name="routeResponseSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```typescript
public readonly routeResponseSelectionExpressionInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="routeResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```typescript
public readonly routeResponseSelectionExpression: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

const apigatewayv2RouteConfig: apigatewayv2Route.Apigatewayv2RouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">routeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">operationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter">requestParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]</code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `requestParameter`<sup>Optional</sup> <a name="requestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter"></a>

```typescript
public readonly requestParameter: IResolvable | Apigatewayv2RouteRequestParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```typescript
public readonly routeResponseSelectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

### Apigatewayv2RouteRequestParameter <a name="Apigatewayv2RouteRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.Initializer"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

const apigatewayv2RouteRequestParameter: apigatewayv2Route.Apigatewayv2RouteRequestParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey">requestParameterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}. |

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey"></a>

```typescript
public readonly requestParameterKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteRequestParameterList <a name="Apigatewayv2RouteRequestParameterList" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

new apigatewayv2Route.Apigatewayv2RouteRequestParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get"></a>

```typescript
public get(index: number): Apigatewayv2RouteRequestParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RouteRequestParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>[]

---


### Apigatewayv2RouteRequestParameterOutputReference <a name="Apigatewayv2RouteRequestParameterOutputReference" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Route } from '@cdktf/provider-aws'

new apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput">requestParameterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey">requestParameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestParameterKeyInput`<sup>Optional</sup> <a name="requestParameterKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput"></a>

```typescript
public readonly requestParameterKeyInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey"></a>

```typescript
public readonly requestParameterKey: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2RouteRequestParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a> | cdktf.IResolvable

---



