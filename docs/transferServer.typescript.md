# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktf/provider-aws.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktf/provider-aws.transferServer.TransferServer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server aws_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

new transferServer.TransferServer(scope: Construct, id: string, config?: TransferServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails">putWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails">resetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType">resetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole">resetInvocationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner">resetPostAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner">resetPreAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails">resetWorkflowDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferServer.TransferServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails"></a>

```typescript
public putEndpointDetails(value: TransferServerEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `putWorkflowDetails` <a name="putWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails"></a>

```typescript
public putWorkflowDetails(value: TransferServerWorkflowDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.transferServer.TransferServer.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.transferServer.TransferServer.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEndpointDetails` <a name="resetEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails"></a>

```typescript
public resetEndpointDetails(): void
```

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-aws.transferServer.TransferServer.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-aws.transferServer.TransferServer.resetHostKey"></a>

```typescript
public resetHostKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transferServer.TransferServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityProviderType` <a name="resetIdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType"></a>

```typescript
public resetIdentityProviderType(): void
```

##### `resetInvocationRole` <a name="resetInvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole"></a>

```typescript
public resetInvocationRole(): void
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole"></a>

```typescript
public resetLoggingRole(): void
```

##### `resetPostAuthenticationLoginBanner` <a name="resetPostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```typescript
public resetPostAuthenticationLoginBanner(): void
```

##### `resetPreAuthenticationLoginBanner` <a name="resetPreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```typescript
public resetPreAuthenticationLoginBanner(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-aws.transferServer.TransferServer.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName"></a>

```typescript
public resetSecurityPolicyName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferServer.TransferServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.transferServer.TransferServer.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetWorkflowDetails` <a name="resetWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails"></a>

```typescript
public resetWorkflowDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

transferServer.TransferServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

transferServer.TransferServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

transferServer.TransferServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint">hostKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput">hostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput">identityProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput">invocationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput">loggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">postAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">preAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput">workflowDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole">invocationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole">loggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferServer.TransferServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferServer.TransferServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferServer.TransferServer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferServer.TransferServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferServer.TransferServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferServer.TransferServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferServerEndpointDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `hostKeyFingerprint`<sup>Required</sup> <a name="hostKeyFingerprint" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint"></a>

```typescript
public readonly hostKeyFingerprint: string;
```

- *Type:* string

---

##### `workflowDetails`<sup>Required</sup> <a name="workflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails"></a>

```typescript
public readonly workflowDetails: TransferServerWorkflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput"></a>

```typescript
public readonly endpointDetailsInput: TransferServerEndpointDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput"></a>

```typescript
public readonly hostKeyInput: string;
```

- *Type:* string

---

##### `identityProviderTypeInput`<sup>Optional</sup> <a name="identityProviderTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```typescript
public readonly identityProviderTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invocationRoleInput`<sup>Optional</sup> <a name="invocationRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput"></a>

```typescript
public readonly invocationRoleInput: string;
```

- *Type:* string

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput"></a>

```typescript
public readonly loggingRoleInput: string;
```

- *Type:* string

---

##### `postAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="postAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```typescript
public readonly postAuthenticationLoginBannerInput: string;
```

- *Type:* string

---

##### `preAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="preAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```typescript
public readonly preAuthenticationLoginBannerInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```typescript
public readonly securityPolicyNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `workflowDetailsInput`<sup>Optional</sup> <a name="workflowDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput"></a>

```typescript
public readonly workflowDetailsInput: TransferServerWorkflowDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.transferServer.TransferServer.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-aws.transferServer.TransferServer.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

---

##### `invocationRole`<sup>Required</sup> <a name="invocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole"></a>

```typescript
public readonly invocationRole: string;
```

- *Type:* string

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

---

##### `postAuthenticationLoginBanner`<sup>Required</sup> <a name="postAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `preAuthenticationLoginBanner`<sup>Required</sup> <a name="preAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferServer.TransferServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferServer.TransferServer.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktf/provider-aws.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerConfig.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

const transferServerConfig: transferServer.TransferServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey">hostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole">invocationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole">loggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}.

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferServerEndpointDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `invocationRole`<sup>Optional</sup> <a name="invocationRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole"></a>

```typescript
public readonly invocationRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}.

---

##### `postAuthenticationLoginBanner`<sup>Optional</sup> <a name="postAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```typescript
public readonly postAuthenticationLoginBanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `preAuthenticationLoginBanner`<sup>Optional</sup> <a name="preAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```typescript
public readonly preAuthenticationLoginBanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}.

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}.

---

##### `workflowDetails`<sup>Optional</sup> <a name="workflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails"></a>

```typescript
public readonly workflowDetails: TransferServerWorkflowDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_details TransferServer#workflow_details}

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

const transferServerEndpointDetails: transferServer.TransferServerEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">addressAllocationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `addressAllocationIds`<sup>Optional</sup> <a name="addressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```typescript
public readonly addressAllocationIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

const transferServerWorkflowDetails: transferServer.TransferServerWorkflowDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload">onUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | on_upload block. |

---

##### `onUpload`<sup>Optional</sup> <a name="onUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```typescript
public readonly onUpload: TransferServerWorkflowDetailsOnUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

on_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#on_upload TransferServer#on_upload}

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

const transferServerWorkflowDetailsOnUpload: transferServer.TransferServerWorkflowDetailsOnUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">workflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

new transferServer.TransferServerEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">resetAddressAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressAllocationIds` <a name="resetAddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```typescript
public resetAddressAllocationIds(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">addressAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">addressAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressAllocationIdsInput`<sup>Optional</sup> <a name="addressAllocationIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```typescript
public readonly addressAllocationIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `addressAllocationIds`<sup>Required</sup> <a name="addressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```typescript
public readonly addressAllocationIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferServerEndpointDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

new transferServer.TransferServerWorkflowDetailsOnUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">workflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```typescript
public readonly workflowIdInput: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferServerWorkflowDetailsOnUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```typescript
import { transferServer } from '@cdktf/provider-aws'

new transferServer.TransferServerWorkflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">putOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">resetOnUpload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnUpload` <a name="putOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```typescript
public putOnUpload(value: TransferServerWorkflowDetailsOnUpload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `resetOnUpload` <a name="resetOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```typescript
public resetOnUpload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">onUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">onUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onUpload`<sup>Required</sup> <a name="onUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```typescript
public readonly onUpload: TransferServerWorkflowDetailsOnUploadOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a>

---

##### `onUploadInput`<sup>Optional</sup> <a name="onUploadInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```typescript
public readonly onUploadInput: TransferServerWorkflowDetailsOnUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferServerWorkflowDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



