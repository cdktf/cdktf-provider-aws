# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktf/provider-aws.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktf/provider-aws.transferServer.TransferServer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server aws_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.NewTransferServer(scope Construct, id *string, config TransferServerConfig) TransferServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferServer.TransferServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEndpointDetails` <a name="PutEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails"></a>

```go
func PutEndpointDetails(value TransferServerEndpointDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `PutWorkflowDetails` <a name="PutWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails"></a>

```go
func PutWorkflowDetails(value TransferServerWorkflowDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.transferServer.TransferServer.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.transferServer.TransferServer.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEndpointDetails` <a name="ResetEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails"></a>

```go
func ResetEndpointDetails()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType"></a>

```go
func ResetEndpointType()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-aws.transferServer.TransferServer.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-aws.transferServer.TransferServer.resetHostKey"></a>

```go
func ResetHostKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferServer.TransferServer.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProviderType` <a name="ResetIdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType"></a>

```go
func ResetIdentityProviderType()
```

##### `ResetInvocationRole` <a name="ResetInvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole"></a>

```go
func ResetInvocationRole()
```

##### `ResetLoggingRole` <a name="ResetLoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole"></a>

```go
func ResetLoggingRole()
```

##### `ResetPostAuthenticationLoginBanner` <a name="ResetPostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```go
func ResetPostAuthenticationLoginBanner()
```

##### `ResetPreAuthenticationLoginBanner` <a name="ResetPreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```go
func ResetPreAuthenticationLoginBanner()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-aws.transferServer.TransferServer.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSecurityPolicyName` <a name="ResetSecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName"></a>

```go
func ResetSecurityPolicyName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferServer.TransferServer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.transferServer.TransferServer.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetWorkflowDetails` <a name="ResetWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails"></a>

```go
func ResetWorkflowDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.TransferServer_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.TransferServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.TransferServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint">HostKeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput">EndpointDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput">HostKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput">IdentityProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput">InvocationRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput">LoggingRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">PostAuthenticationLoginBannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">PreAuthenticationLoginBannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput">SecurityPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput">WorkflowDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKey">HostKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType">IdentityProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole">InvocationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole">LoggingRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName">SecurityPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferServer.TransferServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferServer.TransferServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferServer.TransferServer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferServer.TransferServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferServer.TransferServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferServer.TransferServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferServer.TransferServer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails"></a>

```go
func EndpointDetails() TransferServerEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `HostKeyFingerprint`<sup>Required</sup> <a name="HostKeyFingerprint" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint"></a>

```go
func HostKeyFingerprint() *string
```

- *Type:* *string

---

##### `WorkflowDetails`<sup>Required</sup> <a name="WorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails"></a>

```go
func WorkflowDetails() TransferServerWorkflowDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EndpointDetailsInput`<sup>Optional</sup> <a name="EndpointDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput"></a>

```go
func EndpointDetailsInput() TransferServerEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput"></a>

```go
func HostKeyInput() *string
```

- *Type:* *string

---

##### `IdentityProviderTypeInput`<sup>Optional</sup> <a name="IdentityProviderTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```go
func IdentityProviderTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvocationRoleInput`<sup>Optional</sup> <a name="InvocationRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput"></a>

```go
func InvocationRoleInput() *string
```

- *Type:* *string

---

##### `LoggingRoleInput`<sup>Optional</sup> <a name="LoggingRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput"></a>

```go
func LoggingRoleInput() *string
```

- *Type:* *string

---

##### `PostAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PostAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```go
func PostAuthenticationLoginBannerInput() *string
```

- *Type:* *string

---

##### `PreAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PreAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```go
func PreAuthenticationLoginBannerInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityPolicyNameInput`<sup>Optional</sup> <a name="SecurityPolicyNameInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```go
func SecurityPolicyNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `WorkflowDetailsInput`<sup>Optional</sup> <a name="WorkflowDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput"></a>

```go
func WorkflowDetailsInput() TransferServerWorkflowDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.transferServer.TransferServer.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-aws.transferServer.TransferServer.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKey"></a>

```go
func HostKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferServer.TransferServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderType`<sup>Required</sup> <a name="IdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType"></a>

```go
func IdentityProviderType() *string
```

- *Type:* *string

---

##### `InvocationRole`<sup>Required</sup> <a name="InvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole"></a>

```go
func InvocationRole() *string
```

- *Type:* *string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole"></a>

```go
func LoggingRole() *string
```

- *Type:* *string

---

##### `PostAuthenticationLoginBanner`<sup>Required</sup> <a name="PostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```go
func PostAuthenticationLoginBanner() *string
```

- *Type:* *string

---

##### `PreAuthenticationLoginBanner`<sup>Required</sup> <a name="PreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```go
func PreAuthenticationLoginBanner() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityPolicyName`<sup>Required</sup> <a name="SecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName"></a>

```go
func SecurityPolicyName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferServer.TransferServer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.transferServer.TransferServer.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktf/provider-aws.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

&transferserver.TransferServerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	DirectoryId: *string,
	Domain: *string,
	EndpointDetails: github.com/cdktf/cdktf-provider-aws-go/aws.transferServer.TransferServerEndpointDetails,
	EndpointType: *string,
	ForceDestroy: interface{},
	Function: *string,
	HostKey: *string,
	Id: *string,
	IdentityProviderType: *string,
	InvocationRole: *string,
	LoggingRole: *string,
	PostAuthenticationLoginBanner: *string,
	PreAuthenticationLoginBanner: *string,
	Protocols: *[]*string,
	SecurityPolicyName: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Url: *string,
	WorkflowDetails: github.com/cdktf/cdktf-provider-aws-go/aws.transferServer.TransferServerWorkflowDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey">HostKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType">IdentityProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole">InvocationRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole">LoggingRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName">SecurityPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#certificate TransferServer#certificate}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#directory_id TransferServer#directory_id}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#domain TransferServer#domain}.

---

##### `EndpointDetails`<sup>Optional</sup> <a name="EndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails"></a>

```go
EndpointDetails TransferServerEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#function TransferServer#function}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey"></a>

```go
HostKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#host_key TransferServer#host_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderType`<sup>Optional</sup> <a name="IdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType"></a>

```go
IdentityProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `InvocationRole`<sup>Optional</sup> <a name="InvocationRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole"></a>

```go
InvocationRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `LoggingRole`<sup>Optional</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole"></a>

```go
LoggingRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#logging_role TransferServer#logging_role}.

---

##### `PostAuthenticationLoginBanner`<sup>Optional</sup> <a name="PostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```go
PostAuthenticationLoginBanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `PreAuthenticationLoginBanner`<sup>Optional</sup> <a name="PreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```go
PreAuthenticationLoginBanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#protocols TransferServer#protocols}.

---

##### `SecurityPolicyName`<sup>Optional</sup> <a name="SecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```go
SecurityPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags TransferServer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#tags_all TransferServer#tags_all}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#url TransferServer#url}.

---

##### `WorkflowDetails`<sup>Optional</sup> <a name="WorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails"></a>

```go
WorkflowDetails TransferServerWorkflowDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_details TransferServer#workflow_details}

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

&transferserver.TransferServerEndpointDetails {
	AddressAllocationIds: *[]*string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcEndpointId: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `AddressAllocationIds`<sup>Optional</sup> <a name="AddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```go
AddressAllocationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

&transferserver.TransferServerWorkflowDetails {
	OnUpload: github.com/cdktf/cdktf-provider-aws-go/aws.transferServer.TransferServerWorkflowDetailsOnUpload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | on_upload block. |

---

##### `OnUpload`<sup>Optional</sup> <a name="OnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```go
OnUpload TransferServerWorkflowDetailsOnUpload
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

on_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#on_upload TransferServer#on_upload}

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

&transferserver.TransferServerWorkflowDetailsOnUpload {
	ExecutionRole: *string,
	WorkflowId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">WorkflowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#execution_role TransferServer#execution_role}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```go
WorkflowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.NewTransferServerEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TransferServerEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressAllocationIds` <a name="ResetAddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```go
func ResetAddressAllocationIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">AddressAllocationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressAllocationIdsInput`<sup>Optional</sup> <a name="AddressAllocationIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```go
func AddressAllocationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AddressAllocationIds`<sup>Required</sup> <a name="AddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```go
func AddressAllocationIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() TransferServerEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.NewTransferServerWorkflowDetailsOnUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TransferServerWorkflowDetailsOnUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">WorkflowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```go
func WorkflowIdInput() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```go
func WorkflowId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() TransferServerWorkflowDetailsOnUpload
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferserver"

transferserver.NewTransferServerWorkflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TransferServerWorkflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnUpload` <a name="PutOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```go
func PutOnUpload(value TransferServerWorkflowDetailsOnUpload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `ResetOnUpload` <a name="ResetOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```go
func ResetOnUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">OnUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnUpload`<sup>Required</sup> <a name="OnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```go
func OnUpload() TransferServerWorkflowDetailsOnUploadOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a>

---

##### `OnUploadInput`<sup>Optional</sup> <a name="OnUploadInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```go
func OnUploadInput() TransferServerWorkflowDetailsOnUpload
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() TransferServerWorkflowDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



