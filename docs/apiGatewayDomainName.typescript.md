# `apiGatewayDomainName` Submodule <a name="`apiGatewayDomainName` Submodule" id="@cdktf/provider-aws.apiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainName <a name="ApiGatewayDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

new apiGatewayDomainName.ApiGatewayDomainName(scope: Construct, id: string, config: ApiGatewayDomainNameConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication">putMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody">resetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey">resetCertificatePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication">resetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn">resetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn">resetRegionalCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName">resetRegionalCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `putMutualTlsAuthentication` <a name="putMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication"></a>

```typescript
public putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetCertificateBody` <a name="resetCertificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody"></a>

```typescript
public resetCertificateBody(): void
```

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain"></a>

```typescript
public resetCertificateChain(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetCertificatePrivateKey` <a name="resetCertificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey"></a>

```typescript
public resetCertificatePrivateKey(): void
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMutualTlsAuthentication` <a name="resetMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication"></a>

```typescript
public resetMutualTlsAuthentication(): void
```

##### `resetOwnershipVerificationCertificateArn` <a name="resetOwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```typescript
public resetOwnershipVerificationCertificateArn(): void
```

##### `resetRegionalCertificateArn` <a name="resetRegionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn"></a>

```typescript
public resetRegionalCertificateArn(): void
```

##### `resetRegionalCertificateName` <a name="resetRegionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName"></a>

```typescript
public resetRegionalCertificateName(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

apiGatewayDomainName.ApiGatewayDomainName.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate">certificateUploadDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName">cloudfrontDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId">cloudfrontZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName">regionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId">regionalZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput">certificateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput">certificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput">certificatePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput">mutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput">ownershipVerificationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput">regionalCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput">regionalCertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody">certificateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey">certificatePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn">regionalCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName">regionalCertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateUploadDate`<sup>Required</sup> <a name="certificateUploadDate" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate"></a>

```typescript
public readonly certificateUploadDate: string;
```

- *Type:* string

---

##### `cloudfrontDomainName`<sup>Required</sup> <a name="cloudfrontDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName"></a>

```typescript
public readonly cloudfrontDomainName: string;
```

- *Type:* string

---

##### `cloudfrontZoneId`<sup>Required</sup> <a name="cloudfrontZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId"></a>

```typescript
public readonly cloudfrontZoneId: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiGatewayDomainNameEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

```typescript
public readonly mutualTlsAuthentication: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `regionalDomainName`<sup>Required</sup> <a name="regionalDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName"></a>

```typescript
public readonly regionalDomainName: string;
```

- *Type:* string

---

##### `regionalZoneId`<sup>Required</sup> <a name="regionalZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId"></a>

```typescript
public readonly regionalZoneId: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `certificateBodyInput`<sup>Optional</sup> <a name="certificateBodyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput"></a>

```typescript
public readonly certificateBodyInput: string;
```

- *Type:* string

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput"></a>

```typescript
public readonly certificateChainInput: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `certificatePrivateKeyInput`<sup>Optional</sup> <a name="certificatePrivateKeyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput"></a>

```typescript
public readonly certificatePrivateKeyInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: ApiGatewayDomainNameEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mutualTlsAuthenticationInput`<sup>Optional</sup> <a name="mutualTlsAuthenticationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```typescript
public readonly mutualTlsAuthenticationInput: ApiGatewayDomainNameMutualTlsAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `ownershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="ownershipVerificationCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```typescript
public readonly ownershipVerificationCertificateArnInput: string;
```

- *Type:* string

---

##### `regionalCertificateArnInput`<sup>Optional</sup> <a name="regionalCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput"></a>

```typescript
public readonly regionalCertificateArnInput: string;
```

- *Type:* string

---

##### `regionalCertificateNameInput`<sup>Optional</sup> <a name="regionalCertificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput"></a>

```typescript
public readonly regionalCertificateNameInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `certificateBody`<sup>Required</sup> <a name="certificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `certificatePrivateKey`<sup>Required</sup> <a name="certificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey"></a>

```typescript
public readonly certificatePrivateKey: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownershipVerificationCertificateArn`<sup>Required</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```typescript
public readonly ownershipVerificationCertificateArn: string;
```

- *Type:* string

---

##### `regionalCertificateArn`<sup>Required</sup> <a name="regionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn"></a>

```typescript
public readonly regionalCertificateArn: string;
```

- *Type:* string

---

##### `regionalCertificateName`<sup>Required</sup> <a name="regionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName"></a>

```typescript
public readonly regionalCertificateName: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameConfig <a name="ApiGatewayDomainNameConfig" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

const apiGatewayDomainNameConfig: apiGatewayDomainName.ApiGatewayDomainNameConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody">certificateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain">certificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey">certificatePrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn">regionalCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName">regionalCertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `certificatePrivateKey`<sup>Optional</sup> <a name="certificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey"></a>

```typescript
public readonly certificatePrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiGatewayDomainNameEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```typescript
public readonly mutualTlsAuthentication: ApiGatewayDomainNameMutualTlsAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `ownershipVerificationCertificateArn`<sup>Optional</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```typescript
public readonly ownershipVerificationCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `regionalCertificateArn`<sup>Optional</sup> <a name="regionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn"></a>

```typescript
public readonly regionalCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `regionalCertificateName`<sup>Optional</sup> <a name="regionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName"></a>

```typescript
public readonly regionalCertificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

### ApiGatewayDomainNameEndpointConfiguration <a name="ApiGatewayDomainNameEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

const apiGatewayDomainNameEndpointConfiguration: apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types">types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}. |

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}.

---

### ApiGatewayDomainNameMutualTlsAuthentication <a name="ApiGatewayDomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

const apiGatewayDomainNameMutualTlsAuthentication: apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri">truststoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">truststoreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}. |

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```typescript
public readonly truststoreUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}.

---

##### `truststoreVersion`<sup>Optional</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```typescript
public readonly truststoreVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDomainNameEndpointConfigurationOutputReference <a name="ApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

new apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayDomainNameEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---


### ApiGatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApiGatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```typescript
import { apiGatewayDomainName } from '@cdktf/provider-aws'

new apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">resetTruststoreVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTruststoreVersion` <a name="resetTruststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```typescript
public resetTruststoreVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `truststoreUriInput`<sup>Optional</sup> <a name="truststoreUriInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```typescript
public readonly truststoreUriInput: string;
```

- *Type:* string

---

##### `truststoreVersionInput`<sup>Optional</sup> <a name="truststoreVersionInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```typescript
public readonly truststoreVersionInput: string;
```

- *Type:* string

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```typescript
public readonly truststoreUri: string;
```

- *Type:* string

---

##### `truststoreVersion`<sup>Required</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```typescript
public readonly truststoreVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayDomainNameMutualTlsAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---



