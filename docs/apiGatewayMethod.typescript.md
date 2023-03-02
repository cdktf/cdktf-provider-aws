# `apiGatewayMethod` Submodule <a name="`apiGatewayMethod` Submodule" id="@cdktf/provider-aws.apiGatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethod <a name="ApiGatewayMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method aws_api_gateway_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/provider-aws'

new apiGatewayMethod.ApiGatewayMethod(scope: Construct, id: string, config: ApiGatewayMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId">resetRequestValidatorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired"></a>

```typescript
public resetApiKeyRequired(): void
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes"></a>

```typescript
public resetAuthorizationScopes(): void
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName"></a>

```typescript
public resetOperationName(): void
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels"></a>

```typescript
public resetRequestModels(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestValidatorId` <a name="resetRequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId"></a>

```typescript
public resetRequestValidatorId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/provider-aws'

apiGatewayMethod.ApiGatewayMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/provider-aws'

apiGatewayMethod.ApiGatewayMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/provider-aws'

apiGatewayMethod.ApiGatewayMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput">operationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput">requestModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput">requestValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput"></a>

```typescript
public readonly apiKeyRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput"></a>

```typescript
public readonly authorizationScopesInput: string[];
```

- *Type:* string[]

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput"></a>

```typescript
public readonly operationNameInput: string;
```

- *Type:* string

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput"></a>

```typescript
public readonly requestModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `requestValidatorIdInput`<sup>Optional</sup> <a name="requestValidatorIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput"></a>

```typescript
public readonly requestValidatorIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodConfig <a name="ApiGatewayMethodConfig" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.Initializer"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/provider-aws'

const apiGatewayMethodConfig: apiGatewayMethod.ApiGatewayMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName">operationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `requestValidatorId`<sup>Optional</sup> <a name="requestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---



