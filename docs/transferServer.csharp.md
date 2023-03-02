# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktf/provider-aws.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktf/provider-aws.transferServer.TransferServer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server aws_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServer(Construct Scope, string Id, TransferServerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails">PutEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails">PutWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails">ResetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType">ResetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole">ResetInvocationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole">ResetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner">ResetPostAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner">ResetPreAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName">ResetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails">ResetWorkflowDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferServer.TransferServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpointDetails` <a name="PutEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails"></a>

```csharp
private void PutEndpointDetails(TransferServerEndpointDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `PutWorkflowDetails` <a name="PutWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails"></a>

```csharp
private void PutWorkflowDetails(TransferServerWorkflowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.transferServer.TransferServer.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.transferServer.TransferServer.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEndpointDetails` <a name="ResetEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails"></a>

```csharp
private void ResetEndpointDetails()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-aws.transferServer.TransferServer.resetFunction"></a>

```csharp
private void ResetFunction()
```

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-aws.transferServer.TransferServer.resetHostKey"></a>

```csharp
private void ResetHostKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferServer.TransferServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderType` <a name="ResetIdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType"></a>

```csharp
private void ResetIdentityProviderType()
```

##### `ResetInvocationRole` <a name="ResetInvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole"></a>

```csharp
private void ResetInvocationRole()
```

##### `ResetLoggingRole` <a name="ResetLoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole"></a>

```csharp
private void ResetLoggingRole()
```

##### `ResetPostAuthenticationLoginBanner` <a name="ResetPostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```csharp
private void ResetPostAuthenticationLoginBanner()
```

##### `ResetPreAuthenticationLoginBanner` <a name="ResetPreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```csharp
private void ResetPreAuthenticationLoginBanner()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-aws.transferServer.TransferServer.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetSecurityPolicyName` <a name="ResetSecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName"></a>

```csharp
private void ResetSecurityPolicyName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferServer.TransferServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.transferServer.TransferServer.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetWorkflowDetails` <a name="ResetWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails"></a>

```csharp
private void ResetWorkflowDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint">HostKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput">EndpointDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput">HostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput">IdentityProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput">InvocationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput">LoggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">PostAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">PreAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput">SecurityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput">WorkflowDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType">IdentityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole">InvocationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole">LoggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferServer.TransferServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferServer.TransferServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferServer.TransferServer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferServer.TransferServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferServer.TransferServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferServer.TransferServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferServer.TransferServer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails"></a>

```csharp
public TransferServerEndpointDetailsOutputReference EndpointDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `HostKeyFingerprint`<sup>Required</sup> <a name="HostKeyFingerprint" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint"></a>

```csharp
public string HostKeyFingerprint { get; }
```

- *Type:* string

---

##### `WorkflowDetails`<sup>Required</sup> <a name="WorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails"></a>

```csharp
public TransferServerWorkflowDetailsOutputReference WorkflowDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EndpointDetailsInput`<sup>Optional</sup> <a name="EndpointDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput"></a>

```csharp
public TransferServerEndpointDetails EndpointDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput"></a>

```csharp
public string HostKeyInput { get; }
```

- *Type:* string

---

##### `IdentityProviderTypeInput`<sup>Optional</sup> <a name="IdentityProviderTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```csharp
public string IdentityProviderTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InvocationRoleInput`<sup>Optional</sup> <a name="InvocationRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput"></a>

```csharp
public string InvocationRoleInput { get; }
```

- *Type:* string

---

##### `LoggingRoleInput`<sup>Optional</sup> <a name="LoggingRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput"></a>

```csharp
public string LoggingRoleInput { get; }
```

- *Type:* string

---

##### `PostAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PostAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```csharp
public string PostAuthenticationLoginBannerInput { get; }
```

- *Type:* string

---

##### `PreAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PreAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```csharp
public string PreAuthenticationLoginBannerInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SecurityPolicyNameInput`<sup>Optional</sup> <a name="SecurityPolicyNameInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```csharp
public string SecurityPolicyNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `WorkflowDetailsInput`<sup>Optional</sup> <a name="WorkflowDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput"></a>

```csharp
public TransferServerWorkflowDetails WorkflowDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.transferServer.TransferServer.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-aws.transferServer.TransferServer.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferServer.TransferServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderType`<sup>Required</sup> <a name="IdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType"></a>

```csharp
public string IdentityProviderType { get; }
```

- *Type:* string

---

##### `InvocationRole`<sup>Required</sup> <a name="InvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole"></a>

```csharp
public string InvocationRole { get; }
```

- *Type:* string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole"></a>

```csharp
public string LoggingRole { get; }
```

- *Type:* string

---

##### `PostAuthenticationLoginBanner`<sup>Required</sup> <a name="PostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```csharp
public string PostAuthenticationLoginBanner { get; }
```

- *Type:* string

---

##### `PreAuthenticationLoginBanner`<sup>Required</sup> <a name="PreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```csharp
public string PreAuthenticationLoginBanner { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SecurityPolicyName`<sup>Required</sup> <a name="SecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferServer.TransferServer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.transferServer.TransferServer.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktf/provider-aws.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate = null,
    string DirectoryId = null,
    string Domain = null,
    TransferServerEndpointDetails EndpointDetails = null,
    string EndpointType = null,
    object ForceDestroy = null,
    string Function = null,
    string HostKey = null,
    string Id = null,
    string IdentityProviderType = null,
    string InvocationRole = null,
    string LoggingRole = null,
    string PostAuthenticationLoginBanner = null,
    string PreAuthenticationLoginBanner = null,
    string[] Protocols = null,
    string SecurityPolicyName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Url = null,
    TransferServerWorkflowDetails WorkflowDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey">HostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType">IdentityProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole">InvocationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole">LoggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}.

---

##### `EndpointDetails`<sup>Optional</sup> <a name="EndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails"></a>

```csharp
public TransferServerEndpointDetails EndpointDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey"></a>

```csharp
public string HostKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderType`<sup>Optional</sup> <a name="IdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType"></a>

```csharp
public string IdentityProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `InvocationRole`<sup>Optional</sup> <a name="InvocationRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole"></a>

```csharp
public string InvocationRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `LoggingRole`<sup>Optional</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole"></a>

```csharp
public string LoggingRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}.

---

##### `PostAuthenticationLoginBanner`<sup>Optional</sup> <a name="PostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```csharp
public string PostAuthenticationLoginBanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `PreAuthenticationLoginBanner`<sup>Optional</sup> <a name="PreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```csharp
public string PreAuthenticationLoginBanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}.

---

##### `SecurityPolicyName`<sup>Optional</sup> <a name="SecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}.

---

##### `WorkflowDetails`<sup>Optional</sup> <a name="WorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails"></a>

```csharp
public TransferServerWorkflowDetails WorkflowDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_details TransferServer#workflow_details}

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerEndpointDetails {
    string[] AddressAllocationIds = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    string VpcEndpointId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `AddressAllocationIds`<sup>Optional</sup> <a name="AddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```csharp
public string[] AddressAllocationIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerWorkflowDetails {
    TransferServerWorkflowDetailsOnUpload OnUpload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | on_upload block. |

---

##### `OnUpload`<sup>Optional</sup> <a name="OnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload OnUpload { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

on_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#on_upload TransferServer#on_upload}

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerWorkflowDetailsOnUpload {
    string ExecutionRole,
    string WorkflowId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">WorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```csharp
public string WorkflowId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">ResetAddressAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressAllocationIds` <a name="ResetAddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```csharp
private void ResetAddressAllocationIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">AddressAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressAllocationIdsInput`<sup>Optional</sup> <a name="AddressAllocationIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```csharp
public string[] AddressAllocationIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AddressAllocationIds`<sup>Required</sup> <a name="AddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```csharp
public string[] AddressAllocationIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferServerEndpointDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerWorkflowDetailsOnUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">WorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```csharp
public string WorkflowIdInput { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferServerWorkflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">PutOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">ResetOnUpload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnUpload` <a name="PutOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```csharp
private void PutOnUpload(TransferServerWorkflowDetailsOnUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `ResetOnUpload` <a name="ResetOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```csharp
private void ResetOnUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">OnUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnUpload`<sup>Required</sup> <a name="OnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnUploadOutputReference OnUpload { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a>

---

##### `OnUploadInput`<sup>Optional</sup> <a name="OnUploadInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload OnUploadInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferServerWorkflowDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



