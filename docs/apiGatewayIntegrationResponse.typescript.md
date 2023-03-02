# `apiGatewayIntegrationResponse` Submodule <a name="`apiGatewayIntegrationResponse` Submodule" id="@cdktf/provider-aws.apiGatewayIntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegrationResponse <a name="ApiGatewayIntegrationResponse" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response aws_api_gateway_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/provider-aws'

new apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern">resetSelectionPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling"></a>

```typescript
public resetContentHandling(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates"></a>

```typescript
public resetResponseTemplates(): void
```

##### `resetSelectionPattern` <a name="resetSelectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern"></a>

```typescript
public resetSelectionPattern(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/provider-aws'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/provider-aws'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/provider-aws'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput">contentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput">responseParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput">selectionPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput"></a>

```typescript
public readonly contentHandlingInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput"></a>

```typescript
public readonly responseTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `selectionPatternInput`<sup>Optional</sup> <a name="selectionPatternInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput"></a>

```typescript
public readonly selectionPatternInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationResponseConfig <a name="ApiGatewayIntegrationResponseConfig" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.Initializer"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/provider-aws'

const apiGatewayIntegrationResponseConfig: apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling">contentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}.

---



