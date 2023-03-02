# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktf/provider-aws.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration aws_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

new apigatewayv2Integration.Apigatewayv2Integration(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">putResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">resetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">resetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">resetIntegrationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">resetIntegrationSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">resetIntegrationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">resetPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">resetTemplateSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putResponseParameters` <a name="putResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```typescript
public putResponseParameters(value: IResolvable | Apigatewayv2IntegrationResponseParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```typescript
public putTlsConfig(value: Apigatewayv2IntegrationTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetContentHandlingStrategy` <a name="resetContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```typescript
public resetContentHandlingStrategy(): void
```

##### `resetCredentialsArn` <a name="resetCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```typescript
public resetCredentialsArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationMethod` <a name="resetIntegrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```typescript
public resetIntegrationMethod(): void
```

##### `resetIntegrationSubtype` <a name="resetIntegrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```typescript
public resetIntegrationSubtype(): void
```

##### `resetIntegrationUri` <a name="resetIntegrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```typescript
public resetIntegrationUri(): void
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```typescript
public resetPassthroughBehavior(): void
```

##### `resetPayloadFormatVersion` <a name="resetPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```typescript
public resetPayloadFormatVersion(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```typescript
public resetRequestTemplates(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetTemplateSelectionExpression` <a name="resetTemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```typescript
public resetTemplateSelectionExpression(): void
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds"></a>

```typescript
public resetTimeoutMilliseconds(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

apigatewayv2Integration.Apigatewayv2Integration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression">integrationResponseSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">contentHandlingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">credentialsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">integrationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">integrationSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">integrationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">payloadFormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">responseParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">templateSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">integrationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">integrationSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">integrationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `integrationResponseSelectionExpression`<sup>Required</sup> <a name="integrationResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression"></a>

```typescript
public readonly integrationResponseSelectionExpression: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```typescript
public readonly responseParameters: Apigatewayv2IntegrationResponseParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: Apigatewayv2IntegrationTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `contentHandlingStrategyInput`<sup>Optional</sup> <a name="contentHandlingStrategyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```typescript
public readonly contentHandlingStrategyInput: string;
```

- *Type:* string

---

##### `credentialsArnInput`<sup>Optional</sup> <a name="credentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```typescript
public readonly credentialsArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationMethodInput`<sup>Optional</sup> <a name="integrationMethodInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```typescript
public readonly integrationMethodInput: string;
```

- *Type:* string

---

##### `integrationSubtypeInput`<sup>Optional</sup> <a name="integrationSubtypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```typescript
public readonly integrationSubtypeInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `integrationUriInput`<sup>Optional</sup> <a name="integrationUriInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```typescript
public readonly integrationUriInput: string;
```

- *Type:* string

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```typescript
public readonly passthroughBehaviorInput: string;
```

- *Type:* string

---

##### `payloadFormatVersionInput`<sup>Optional</sup> <a name="payloadFormatVersionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```typescript
public readonly payloadFormatVersionInput: string;
```

- *Type:* string

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```typescript
public readonly requestTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: IResolvable | Apigatewayv2IntegrationResponseParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]

---

##### `templateSelectionExpressionInput`<sup>Optional</sup> <a name="templateSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```typescript
public readonly templateSelectionExpressionInput: string;
```

- *Type:* string

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput"></a>

```typescript
public readonly timeoutMillisecondsInput: number;
```

- *Type:* number

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: Apigatewayv2IntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="contentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationMethod`<sup>Required</sup> <a name="integrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```typescript
public readonly integrationMethod: string;
```

- *Type:* string

---

##### `integrationSubtype`<sup>Required</sup> <a name="integrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```typescript
public readonly integrationSubtype: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `integrationUri`<sup>Required</sup> <a name="integrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```typescript
public readonly integrationUri: string;
```

- *Type:* string

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="payloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```typescript
public readonly payloadFormatVersion: string;
```

- *Type:* string

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="templateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds"></a>

```typescript
public readonly timeoutMilliseconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

const apigatewayv2IntegrationConfig: apigatewayv2Integration.Apigatewayv2IntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">integrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">integrationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">integrationSubtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">integrationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">responseParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]</code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationMethod`<sup>Optional</sup> <a name="integrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```typescript
public readonly integrationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `integrationSubtype`<sup>Optional</sup> <a name="integrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```typescript
public readonly integrationSubtype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `integrationUri`<sup>Optional</sup> <a name="integrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```typescript
public readonly integrationUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="payloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```typescript
public readonly payloadFormatVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```typescript
public readonly responseParameters: IResolvable | Apigatewayv2IntegrationResponseParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds"></a>

```typescript
public readonly timeoutMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: Apigatewayv2IntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

const apigatewayv2IntegrationResponseParameters: apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings">mappings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings"></a>

```typescript
public readonly mappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

const apigatewayv2IntegrationTlsConfig: apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">serverNameToVerify</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `serverNameToVerify`<sup>Optional</sup> <a name="serverNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```typescript
public readonly serverNameToVerify: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersList" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get"></a>

```typescript
public get(index: number): Apigatewayv2IntegrationResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2IntegrationResponseParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>[]

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings">mappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput"></a>

```typescript
public readonly mappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings"></a>

```typescript
public readonly mappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2IntegrationResponseParameters | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a> | cdktf.IResolvable

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktf/provider-aws'

new apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">resetServerNameToVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerNameToVerify` <a name="resetServerNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```typescript
public resetServerNameToVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">serverNameToVerifyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">serverNameToVerify</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverNameToVerifyInput`<sup>Optional</sup> <a name="serverNameToVerifyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```typescript
public readonly serverNameToVerifyInput: string;
```

- *Type:* string

---

##### `serverNameToVerify`<sup>Required</sup> <a name="serverNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```typescript
public readonly serverNameToVerify: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2IntegrationTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



