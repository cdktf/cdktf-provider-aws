# `apiGatewayAuthorizer` Submodule <a name="`apiGatewayAuthorizer` Submodule" id="@cdktf/provider-aws.apiGatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayAuthorizer <a name="ApiGatewayAuthorizer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer aws_api_gateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer"></a>

```typescript
import { apiGatewayAuthorizer } from '@cdktf/provider-aws'

new apiGatewayAuthorizer.ApiGatewayAuthorizer(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig">ApiGatewayAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig">ApiGatewayAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials">resetAuthorizerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource">resetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns">resetProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorizerCredentials` <a name="resetAuthorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials"></a>

```typescript
public resetAuthorizerCredentials(): void
```

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri"></a>

```typescript
public resetAuthorizerUri(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentitySource` <a name="resetIdentitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource"></a>

```typescript
public resetIdentitySource(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```

##### `resetProviderArns` <a name="resetProviderArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns"></a>

```typescript
public resetProviderArns(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct"></a>

```typescript
import { apiGatewayAuthorizer } from '@cdktf/provider-aws'

apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement"></a>

```typescript
import { apiGatewayAuthorizer } from '@cdktf/provider-aws'

apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource"></a>

```typescript
import { apiGatewayAuthorizer } from '@cdktf/provider-aws'

apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput">authorizerCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput">identitySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput">providerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials">authorizerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource">identitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns">providerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorizerCredentialsInput`<sup>Optional</sup> <a name="authorizerCredentialsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput"></a>

```typescript
public readonly authorizerCredentialsInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `identitySourceInput`<sup>Optional</sup> <a name="identitySourceInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput"></a>

```typescript
public readonly identitySourceInput: string;
```

- *Type:* string

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerArnsInput`<sup>Optional</sup> <a name="providerArnsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput"></a>

```typescript
public readonly providerArnsInput: string[];
```

- *Type:* string[]

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `authorizerCredentials`<sup>Required</sup> <a name="authorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials"></a>

```typescript
public readonly authorizerCredentials: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerArns`<sup>Required</sup> <a name="providerArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns"></a>

```typescript
public readonly providerArns: string[];
```

- *Type:* string[]

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayAuthorizerConfig <a name="ApiGatewayAuthorizerConfig" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.Initializer"></a>

```typescript
import { apiGatewayAuthorizer } from '@cdktf/provider-aws'

const apiGatewayAuthorizerConfig: apiGatewayAuthorizer.ApiGatewayAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials">authorizerCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource">identitySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns">providerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials"></a>

```typescript
public readonly authorizerCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.

---

##### `providerArns`<sup>Optional</sup> <a name="providerArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns"></a>

```typescript
public readonly providerArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}.

---



