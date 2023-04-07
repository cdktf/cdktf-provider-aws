# `ssoadminPermissionSetInlinePolicy` Submodule <a name="`ssoadminPermissionSetInlinePolicy` Submodule" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminPermissionSetInlinePolicy <a name="SsoadminPermissionSetInlinePolicy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadminpermissionsetinlinepolicy"

ssoadminpermissionsetinlinepolicy.NewSsoadminPermissionSetInlinePolicy(scope Construct, id *string, config SsoadminPermissionSetInlinePolicyConfig) SsoadminPermissionSetInlinePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadminpermissionsetinlinepolicy"

ssoadminpermissionsetinlinepolicy.SsoadminPermissionSetInlinePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadminpermissionsetinlinepolicy"

ssoadminpermissionsetinlinepolicy.SsoadminPermissionSetInlinePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadminpermissionsetinlinepolicy"

ssoadminpermissionsetinlinepolicy.SsoadminPermissionSetInlinePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput">InlinePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy">InlinePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InlinePolicyInput`<sup>Optional</sup> <a name="InlinePolicyInput" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput"></a>

```go
func InlinePolicyInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput"></a>

```go
func PermissionSetArnInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy"></a>

```go
func InlinePolicy() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn"></a>

```go
func PermissionSetArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminPermissionSetInlinePolicyConfig <a name="SsoadminPermissionSetInlinePolicyConfig" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadminpermissionsetinlinepolicy"

&ssoadminpermissionsetinlinepolicy.SsoadminPermissionSetInlinePolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InlinePolicy: *string,
	InstanceArn: *string,
	PermissionSetArn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy">InlinePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy"></a>

```go
InlinePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn"></a>

```go
PermissionSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



