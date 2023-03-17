# `sqsQueueRedriveAllowPolicy` Submodule <a name="`sqsQueueRedriveAllowPolicy` Submodule" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueueRedriveAllowPolicy <a name="SqsQueueRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sqsqueueredriveallowpolicy"

sqsqueueredriveallowpolicy.NewSqsQueueRedriveAllowPolicy(scope Construct, id *string, config SqsQueueRedriveAllowPolicyConfig) SqsQueueRedriveAllowPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig">SqsQueueRedriveAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig">SqsQueueRedriveAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sqsqueueredriveallowpolicy"

sqsqueueredriveallowpolicy.SqsQueueRedriveAllowPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sqsqueueredriveallowpolicy"

sqsqueueredriveallowpolicy.SqsQueueRedriveAllowPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sqsqueueredriveallowpolicy"

sqsqueueredriveallowpolicy.SqsQueueRedriveAllowPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrlInput">QueueUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicyInput">RedriveAllowPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrlInput"></a>

```go
func QueueUrlInput() *string
```

- *Type:* *string

---

##### `RedriveAllowPolicyInput`<sup>Optional</sup> <a name="RedriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicyInput"></a>

```go
func RedriveAllowPolicyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrl"></a>

```go
func QueueUrl() *string
```

- *Type:* *string

---

##### `RedriveAllowPolicy`<sup>Required</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicy"></a>

```go
func RedriveAllowPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueRedriveAllowPolicyConfig <a name="SqsQueueRedriveAllowPolicyConfig" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sqsqueueredriveallowpolicy"

&sqsqueueredriveallowpolicy.SqsQueueRedriveAllowPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	QueueUrl: *string,
	RedriveAllowPolicy: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.queueUrl"></a>

```go
QueueUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}.

---

##### `RedriveAllowPolicy`<sup>Required</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.redriveAllowPolicy"></a>

```go
RedriveAllowPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



