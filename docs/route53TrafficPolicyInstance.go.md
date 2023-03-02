# `route53TrafficPolicyInstance` Submodule <a name="`route53TrafficPolicyInstance` Submodule" id="@cdktf/provider-aws.route53TrafficPolicyInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53TrafficPolicyInstance <a name="Route53TrafficPolicyInstance" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance aws_route53_traffic_policy_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53trafficpolicyinstance"

route53trafficpolicyinstance.NewRoute53TrafficPolicyInstance(scope Construct, id *string, config Route53TrafficPolicyInstanceConfig) Route53TrafficPolicyInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig">Route53TrafficPolicyInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig">Route53TrafficPolicyInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53trafficpolicyinstance"

route53trafficpolicyinstance.Route53TrafficPolicyInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53trafficpolicyinstance"

route53trafficpolicyinstance.Route53TrafficPolicyInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53trafficpolicyinstance"

route53trafficpolicyinstance.Route53TrafficPolicyInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput">TrafficPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput">TrafficPolicyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion">TrafficPolicyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TrafficPolicyIdInput`<sup>Optional</sup> <a name="TrafficPolicyIdInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput"></a>

```go
func TrafficPolicyIdInput() *string
```

- *Type:* *string

---

##### `TrafficPolicyVersionInput`<sup>Optional</sup> <a name="TrafficPolicyVersionInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput"></a>

```go
func TrafficPolicyVersionInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId"></a>

```go
func TrafficPolicyId() *string
```

- *Type:* *string

---

##### `TrafficPolicyVersion`<sup>Required</sup> <a name="TrafficPolicyVersion" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion"></a>

```go
func TrafficPolicyVersion() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53TrafficPolicyInstanceConfig <a name="Route53TrafficPolicyInstanceConfig" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53trafficpolicyinstance"

&route53trafficpolicyinstance.Route53TrafficPolicyInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostedZoneId: *string,
	Name: *string,
	TrafficPolicyId: *string,
	TrafficPolicyVersion: *f64,
	Ttl: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion">TrafficPolicyVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}.

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId"></a>

```go
TrafficPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}.

---

##### `TrafficPolicyVersion`<sup>Required</sup> <a name="TrafficPolicyVersion" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion"></a>

```go
TrafficPolicyVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}.

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



