# `cognitoUserPoolUiCustomization` Submodule <a name="`cognitoUserPoolUiCustomization` Submodule" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUiCustomization <a name="CognitoUserPoolUiCustomization" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpooluicustomization"

cognitouserpooluicustomization.NewCognitoUserPoolUiCustomization(scope Construct, id *string, config CognitoUserPoolUiCustomizationConfig) CognitoUserPoolUiCustomization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig">CognitoUserPoolUiCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig">CognitoUserPoolUiCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss">ResetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile">ResetImageFile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetCss` <a name="ResetCss" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss"></a>

```go
func ResetCss()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId"></a>

```go
func ResetId()
```

##### `ResetImageFile` <a name="ResetImageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile"></a>

```go
func ResetImageFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpooluicustomization"

cognitouserpooluicustomization.CognitoUserPoolUiCustomization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpooluicustomization"

cognitouserpooluicustomization.CognitoUserPoolUiCustomization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpooluicustomization"

cognitouserpooluicustomization.CognitoUserPoolUiCustomization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion">CssVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput">CssInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput">ImageFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css">Css</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile">ImageFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `CssVersion`<sup>Required</sup> <a name="CssVersion" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion"></a>

```go
func CssVersion() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput"></a>

```go
func CssInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageFileInput`<sup>Optional</sup> <a name="ImageFileInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput"></a>

```go
func ImageFileInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css"></a>

```go
func Css() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageFile`<sup>Required</sup> <a name="ImageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile"></a>

```go
func ImageFile() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUiCustomizationConfig <a name="CognitoUserPoolUiCustomizationConfig" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpooluicustomization"

&cognitouserpooluicustomization.CognitoUserPoolUiCustomizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	ClientId: *string,
	Css: *string,
	Id: *string,
	ImageFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css">Css</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile">ImageFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `Css`<sup>Optional</sup> <a name="Css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css"></a>

```go
Css *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageFile`<sup>Optional</sup> <a name="ImageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile"></a>

```go
ImageFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---



