# `serverlessapplicationrepositoryCloudformationStack` Submodule <a name="`serverlessapplicationrepositoryCloudformationStack` Submodule" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessapplicationrepositoryCloudformationStack <a name="ServerlessapplicationrepositoryCloudformationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack aws_serverlessapplicationrepository_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

serverlessapplicationrepositorycloudformationstack.NewServerlessapplicationrepositoryCloudformationStack(scope Construct, id *string, config ServerlessapplicationrepositoryCloudformationStackConfig) ServerlessapplicationrepositoryCloudformationStack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts"></a>

```go
func PutTimeouts(value ServerlessapplicationrepositoryCloudformationStackTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion"></a>

```go
func ResetSemanticVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

serverlessapplicationrepositorycloudformationstack.ServerlessapplicationrepositoryCloudformationStack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

serverlessapplicationrepositorycloudformationstack.ServerlessapplicationrepositoryCloudformationStack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

serverlessapplicationrepositorycloudformationstack.ServerlessapplicationrepositoryCloudformationStack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs">Outputs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs"></a>

```go
func Outputs() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts"></a>

```go
func Timeouts() ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput"></a>

```go
func SemanticVersionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion"></a>

```go
func SemanticVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessapplicationrepositoryCloudformationStackConfig <a name="ServerlessapplicationrepositoryCloudformationStackConfig" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

&serverlessapplicationrepositorycloudformationstack.ServerlessapplicationrepositoryCloudformationStackConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Capabilities: *[]*string,
	Name: *string,
	Id: *string,
	Parameters: *map[string]*string,
	SemanticVersion: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion"></a>

```go
SemanticVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts"></a>

```go
Timeouts ServerlessapplicationrepositoryCloudformationStackTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}

---

### ServerlessapplicationrepositoryCloudformationStackTimeouts <a name="ServerlessapplicationrepositoryCloudformationStackTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

&serverlessapplicationrepositorycloudformationstack.ServerlessapplicationrepositoryCloudformationStackTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference <a name="ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/serverlessapplicationrepositorycloudformationstack"

serverlessapplicationrepositorycloudformationstack.NewServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



