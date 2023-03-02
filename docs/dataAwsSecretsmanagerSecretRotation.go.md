# `dataAwsSecretsmanagerSecretRotation` Submodule <a name="`dataAwsSecretsmanagerSecretRotation` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerSecretRotation <a name="DataAwsSecretsmanagerSecretRotation" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.NewDataAwsSecretsmanagerSecretRotation(scope Construct, id *string, config DataAwsSecretsmanagerSecretRotationConfig) DataAwsSecretsmanagerSecretRotation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.DataAwsSecretsmanagerSecretRotation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.DataAwsSecretsmanagerSecretRotation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.DataAwsSecretsmanagerSecretRotation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled">RotationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled"></a>

```go
func RotationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```go
func RotationLambdaArn() *string
```

- *Type:* *string

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules"></a>

```go
func RotationRules() DataAwsSecretsmanagerSecretRotationRotationRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerSecretRotationConfig <a name="DataAwsSecretsmanagerSecretRotationConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

&dataawssecretsmanagersecretrotation.DataAwsSecretsmanagerSecretRotationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSecretsmanagerSecretRotationRotationRules <a name="DataAwsSecretsmanagerSecretRotationRotationRules" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

&dataawssecretsmanagersecretrotation.DataAwsSecretsmanagerSecretRotationRotationRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecretsmanagerSecretRotationRotationRulesList <a name="DataAwsSecretsmanagerSecretRotationRotationRulesList" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.NewDataAwsSecretsmanagerSecretRotationRotationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSecretsmanagerSecretRotationRotationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get"></a>

```go
func Get(index *f64) DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference <a name="DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagersecretrotation"

dataawssecretsmanagersecretrotation.NewDataAwsSecretsmanagerSecretRotationRotationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```go
func AutomaticallyAfterDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSecretsmanagerSecretRotationRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a>

---



