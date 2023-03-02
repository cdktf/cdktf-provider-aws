# `apiGatewayIntegration` Submodule <a name="`apiGatewayIntegration` Submodule" id="@cdktf/provider-aws.apiGatewayIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegration <a name="ApiGatewayIntegration" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

new apiGatewayIntegration.ApiGatewayIntegration(scope: Construct, id: string, config: ApiGatewayIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig">ApiGatewayIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig">ApiGatewayIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters">resetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace">resetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod">resetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig"></a>

```typescript
public putTlsConfig(value: ApiGatewayIntegrationTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `resetCacheKeyParameters` <a name="resetCacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters"></a>

```typescript
public resetCacheKeyParameters(): void
```

##### `resetCacheNamespace` <a name="resetCacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace"></a>

```typescript
public resetCacheNamespace(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling"></a>

```typescript
public resetContentHandling(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationHttpMethod` <a name="resetIntegrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod"></a>

```typescript
public resetIntegrationHttpMethod(): void
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior"></a>

```typescript
public resetPassthroughBehavior(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates"></a>

```typescript
public resetRequestTemplates(): void
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds"></a>

```typescript
public resetTimeoutMilliseconds(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri"></a>

```typescript
public resetUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

apiGatewayIntegration.ApiGatewayIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput">cacheKeyParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput">cacheNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput">contentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput">integrationHttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: ApiGatewayIntegrationTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a>

---

##### `cacheKeyParametersInput`<sup>Optional</sup> <a name="cacheKeyParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput"></a>

```typescript
public readonly cacheKeyParametersInput: string[];
```

- *Type:* string[]

---

##### `cacheNamespaceInput`<sup>Optional</sup> <a name="cacheNamespaceInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput"></a>

```typescript
public readonly cacheNamespaceInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput"></a>

```typescript
public readonly contentHandlingInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationHttpMethodInput`<sup>Optional</sup> <a name="integrationHttpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput"></a>

```typescript
public readonly integrationHttpMethodInput: string;
```

- *Type:* string

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput"></a>

```typescript
public readonly passthroughBehaviorInput: string;
```

- *Type:* string

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput"></a>

```typescript
public readonly requestTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput"></a>

```typescript
public readonly timeoutMillisecondsInput: number;
```

- *Type:* number

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: ApiGatewayIntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `cacheKeyParameters`<sup>Required</sup> <a name="cacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="cacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationHttpMethod`<sup>Required</sup> <a name="integrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds"></a>

```typescript
public readonly timeoutMilliseconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationConfig <a name="ApiGatewayIntegrationConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.Initializer"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

const apiGatewayIntegrationConfig: apiGatewayIntegration.ApiGatewayIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling">contentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials">credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds"></a>

```typescript
public readonly timeoutMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: ApiGatewayIntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

### ApiGatewayIntegrationTlsConfig <a name="ApiGatewayIntegrationTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.Initializer"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

const apiGatewayIntegrationTlsConfig: apiGatewayIntegration.ApiGatewayIntegrationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification">insecureSkipVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}. |

---

##### `insecureSkipVerification`<sup>Optional</sup> <a name="insecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification"></a>

```typescript
public readonly insecureSkipVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayIntegrationTlsConfigOutputReference <a name="ApiGatewayIntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer"></a>

```typescript
import { apiGatewayIntegration } from '@cdktf/provider-aws'

new apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification">resetInsecureSkipVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsecureSkipVerification` <a name="resetInsecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification"></a>

```typescript
public resetInsecureSkipVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput">insecureSkipVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification">insecureSkipVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insecureSkipVerificationInput`<sup>Optional</sup> <a name="insecureSkipVerificationInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput"></a>

```typescript
public readonly insecureSkipVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insecureSkipVerification`<sup>Required</sup> <a name="insecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification"></a>

```typescript
public readonly insecureSkipVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayIntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---



