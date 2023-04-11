# `organizationsPolicyAttachment` Submodule <a name="`organizationsPolicyAttachment` Submodule" id="@cdktf/provider-aws.organizationsPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsPolicyAttachment <a name="OrganizationsPolicyAttachment" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment aws_organizations_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationspolicyattachment"

organizationspolicyattachment.NewOrganizationsPolicyAttachment(scope Construct, id *string, config OrganizationsPolicyAttachmentConfig) OrganizationsPolicyAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig">OrganizationsPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig">OrganizationsPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.resetSkipDestroy"></a>

```go
func ResetSkipDestroy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationspolicyattachment"

organizationspolicyattachment.OrganizationsPolicyAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationspolicyattachment"

organizationspolicyattachment.OrganizationsPolicyAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationspolicyattachment"

organizationspolicyattachment.OrganizationsPolicyAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.skipDestroy">SkipDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.skipDestroyInput"></a>

```go
func SkipDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.skipDestroy"></a>

```go
func SkipDestroy() interface{}
```

- *Type:* interface{}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsPolicyAttachmentConfig <a name="OrganizationsPolicyAttachmentConfig" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationspolicyattachment"

&organizationspolicyattachment.OrganizationsPolicyAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
	TargetId: *string,
	Id: *string,
	SkipDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#policy_id OrganizationsPolicyAttachment#policy_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#target_id OrganizationsPolicyAttachment#target_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#id OrganizationsPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.skipDestroy">SkipDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#skip_destroy OrganizationsPolicyAttachment#skip_destroy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#policy_id OrganizationsPolicyAttachment#policy_id}.

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#target_id OrganizationsPolicyAttachment#target_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#id OrganizationsPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.organizationsPolicyAttachment.OrganizationsPolicyAttachmentConfig.property.skipDestroy"></a>

```go
SkipDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment#skip_destroy OrganizationsPolicyAttachment#skip_destroy}.

---



