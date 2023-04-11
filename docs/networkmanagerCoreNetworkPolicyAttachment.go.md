# `networkmanagerCoreNetworkPolicyAttachment` Submodule <a name="`networkmanagerCoreNetworkPolicyAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPolicyAttachment <a name="NetworkmanagerCoreNetworkPolicyAttachment" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

networkmanagercorenetworkpolicyattachment.NewNetworkmanagerCoreNetworkPolicyAttachment(scope Construct, id *string, config NetworkmanagerCoreNetworkPolicyAttachmentConfig) NetworkmanagerCoreNetworkPolicyAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts"></a>

```go
func PutTimeouts(value NetworkmanagerCoreNetworkPolicyAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

networkmanagercorenetworkpolicyattachment.NetworkmanagerCoreNetworkPolicyAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

networkmanagercorenetworkpolicyattachment.NetworkmanagerCoreNetworkPolicyAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

networkmanagercorenetworkpolicyattachment.NetworkmanagerCoreNetworkPolicyAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts"></a>

```go
func Timeouts() NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput"></a>

```go
func CoreNetworkIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentConfig <a name="NetworkmanagerCoreNetworkPolicyAttachmentConfig" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

&networkmanagercorenetworkpolicyattachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CoreNetworkId: *string,
	PolicyDocument: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId"></a>

```go
CoreNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}.

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts"></a>

```go
Timeouts NetworkmanagerCoreNetworkPolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}

---

### NetworkmanagerCoreNetworkPolicyAttachmentTimeouts <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

&networkmanagercorenetworkpolicyattachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts {
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagercorenetworkpolicyattachment"

networkmanagercorenetworkpolicyattachment.NewNetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



