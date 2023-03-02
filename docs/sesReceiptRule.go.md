# `sesReceiptRule` Submodule <a name="`sesReceiptRule` Submodule" id="@cdktf/provider-aws.sesReceiptRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptRule <a name="SesReceiptRule" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRule(scope Construct, id *string, config SesReceiptRuleConfig) SesReceiptRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction">PutAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction">PutBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction">PutLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action">PutS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction">PutSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction">PutStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction">PutWorkmailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction">ResetAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter">ResetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction">ResetBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction">ResetLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action">ResetS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled">ResetScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction">ResetSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction">ResetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy">ResetTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction">ResetWorkmailAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAddHeaderAction` <a name="PutAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction"></a>

```go
func PutAddHeaderAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBounceAction` <a name="PutBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction"></a>

```go
func PutBounceAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLambdaAction` <a name="PutLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction"></a>

```go
func PutLambdaAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3Action` <a name="PutS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action"></a>

```go
func PutS3Action(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSnsAction` <a name="PutSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction"></a>

```go
func PutSnsAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStopAction` <a name="PutStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction"></a>

```go
func PutStopAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkmailAction` <a name="PutWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction"></a>

```go
func PutWorkmailAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddHeaderAction` <a name="ResetAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction"></a>

```go
func ResetAddHeaderAction()
```

##### `ResetAfter` <a name="ResetAfter" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter"></a>

```go
func ResetAfter()
```

##### `ResetBounceAction` <a name="ResetBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction"></a>

```go
func ResetBounceAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLambdaAction` <a name="ResetLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction"></a>

```go
func ResetLambdaAction()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients"></a>

```go
func ResetRecipients()
```

##### `ResetS3Action` <a name="ResetS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action"></a>

```go
func ResetS3Action()
```

##### `ResetScanEnabled` <a name="ResetScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled"></a>

```go
func ResetScanEnabled()
```

##### `ResetSnsAction` <a name="ResetSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction"></a>

```go
func ResetSnsAction()
```

##### `ResetStopAction` <a name="ResetStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction"></a>

```go
func ResetStopAction()
```

##### `ResetTlsPolicy` <a name="ResetTlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy"></a>

```go
func ResetTlsPolicy()
```

##### `ResetWorkmailAction` <a name="ResetWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction"></a>

```go
func ResetWorkmailAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.SesReceiptRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.SesReceiptRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.SesReceiptRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction">AddHeaderAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction">BounceAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction">LambdaAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action">S3Action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction">SnsAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction">StopAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction">WorkmailAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput">AddHeaderActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput">AfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput">BounceActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput">LambdaActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput">RuleSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput">S3ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput">ScanEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput">SnsActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput">StopActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput">TlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput">WorkmailActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after">After</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName">RuleSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled">ScanEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy">TlsPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddHeaderAction`<sup>Required</sup> <a name="AddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction"></a>

```go
func AddHeaderAction() SesReceiptRuleAddHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BounceAction`<sup>Required</sup> <a name="BounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction"></a>

```go
func BounceAction() SesReceiptRuleBounceActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a>

---

##### `LambdaAction`<sup>Required</sup> <a name="LambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction"></a>

```go
func LambdaAction() SesReceiptRuleLambdaActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a>

---

##### `S3Action`<sup>Required</sup> <a name="S3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action"></a>

```go
func S3Action() SesReceiptRuleS3ActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a>

---

##### `SnsAction`<sup>Required</sup> <a name="SnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction"></a>

```go
func SnsAction() SesReceiptRuleSnsActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a>

---

##### `StopAction`<sup>Required</sup> <a name="StopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction"></a>

```go
func StopAction() SesReceiptRuleStopActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a>

---

##### `WorkmailAction`<sup>Required</sup> <a name="WorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction"></a>

```go
func WorkmailAction() SesReceiptRuleWorkmailActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a>

---

##### `AddHeaderActionInput`<sup>Optional</sup> <a name="AddHeaderActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput"></a>

```go
func AddHeaderActionInput() interface{}
```

- *Type:* interface{}

---

##### `AfterInput`<sup>Optional</sup> <a name="AfterInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput"></a>

```go
func AfterInput() *string
```

- *Type:* *string

---

##### `BounceActionInput`<sup>Optional</sup> <a name="BounceActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput"></a>

```go
func BounceActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LambdaActionInput`<sup>Optional</sup> <a name="LambdaActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput"></a>

```go
func LambdaActionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleSetNameInput`<sup>Optional</sup> <a name="RuleSetNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput"></a>

```go
func RuleSetNameInput() *string
```

- *Type:* *string

---

##### `S3ActionInput`<sup>Optional</sup> <a name="S3ActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput"></a>

```go
func S3ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ScanEnabledInput`<sup>Optional</sup> <a name="ScanEnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput"></a>

```go
func ScanEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SnsActionInput`<sup>Optional</sup> <a name="SnsActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput"></a>

```go
func SnsActionInput() interface{}
```

- *Type:* interface{}

---

##### `StopActionInput`<sup>Optional</sup> <a name="StopActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput"></a>

```go
func StopActionInput() interface{}
```

- *Type:* interface{}

---

##### `TlsPolicyInput`<sup>Optional</sup> <a name="TlsPolicyInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput"></a>

```go
func TlsPolicyInput() *string
```

- *Type:* *string

---

##### `WorkmailActionInput`<sup>Optional</sup> <a name="WorkmailActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput"></a>

```go
func WorkmailActionInput() interface{}
```

- *Type:* interface{}

---

##### `After`<sup>Required</sup> <a name="After" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after"></a>

```go
func After() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName"></a>

```go
func RuleSetName() *string
```

- *Type:* *string

---

##### `ScanEnabled`<sup>Required</sup> <a name="ScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled"></a>

```go
func ScanEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy"></a>

```go
func TlsPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptRuleAddHeaderAction <a name="SesReceiptRuleAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleAddHeaderAction {
	HeaderName: *string,
	HeaderValue: *string,
	Position: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue">HeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}.

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

### SesReceiptRuleBounceAction <a name="SesReceiptRuleBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleBounceAction {
	Message: *string,
	Position: *f64,
	Sender: *string,
	SmtpReplyCode: *string,
	StatusCode: *string,
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender">Sender</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode">SmtpReplyCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `Sender`<sup>Required</sup> <a name="Sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender"></a>

```go
Sender *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}.

---

##### `SmtpReplyCode`<sup>Required</sup> <a name="SmtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode"></a>

```go
SmtpReplyCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleConfig <a name="SesReceiptRuleConfig" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuleSetName: *string,
	AddHeaderAction: interface{},
	After: *string,
	BounceAction: interface{},
	Enabled: interface{},
	Id: *string,
	LambdaAction: interface{},
	Recipients: *[]*string,
	S3Action: interface{},
	ScanEnabled: interface{},
	SnsAction: interface{},
	StopAction: interface{},
	TlsPolicy: *string,
	WorkmailAction: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName">RuleSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction">AddHeaderAction</a></code> | <code>interface{}</code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after">After</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction">BounceAction</a></code> | <code>interface{}</code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction">LambdaAction</a></code> | <code>interface{}</code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients">Recipients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action">S3Action</a></code> | <code>interface{}</code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled">ScanEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction">SnsAction</a></code> | <code>interface{}</code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction">StopAction</a></code> | <code>interface{}</code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy">TlsPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction">WorkmailAction</a></code> | <code>interface{}</code> | workmail_action block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName"></a>

```go
RuleSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `AddHeaderAction`<sup>Optional</sup> <a name="AddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction"></a>

```go
AddHeaderAction interface{}
```

- *Type:* interface{}

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `After`<sup>Optional</sup> <a name="After" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after"></a>

```go
After *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `BounceAction`<sup>Optional</sup> <a name="BounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction"></a>

```go
BounceAction interface{}
```

- *Type:* interface{}

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaAction`<sup>Optional</sup> <a name="LambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction"></a>

```go
LambdaAction interface{}
```

- *Type:* interface{}

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `S3Action`<sup>Optional</sup> <a name="S3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action"></a>

```go
S3Action interface{}
```

- *Type:* interface{}

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `ScanEnabled`<sup>Optional</sup> <a name="ScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled"></a>

```go
ScanEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `SnsAction`<sup>Optional</sup> <a name="SnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction"></a>

```go
SnsAction interface{}
```

- *Type:* interface{}

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `StopAction`<sup>Optional</sup> <a name="StopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction"></a>

```go
StopAction interface{}
```

- *Type:* interface{}

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `TlsPolicy`<sup>Optional</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy"></a>

```go
TlsPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `WorkmailAction`<sup>Optional</sup> <a name="WorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction"></a>

```go
WorkmailAction interface{}
```

- *Type:* interface{}

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

### SesReceiptRuleLambdaAction <a name="SesReceiptRuleLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleLambdaAction {
	FunctionArn: *string,
	Position: *f64,
	InvocationType: *string,
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType">InvocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType"></a>

```go
InvocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleS3Action <a name="SesReceiptRuleS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleS3Action {
	BucketName: *string,
	Position: *f64,
	KmsKeyArn: *string,
	ObjectKeyPrefix: *string,
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}.

---

##### `ObjectKeyPrefix`<sup>Optional</sup> <a name="ObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix"></a>

```go
ObjectKeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleSnsAction <a name="SesReceiptRuleSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleSnsAction {
	Position: *f64,
	TopicArn: *string,
	Encoding: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}. |

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}.

---

### SesReceiptRuleStopAction <a name="SesReceiptRuleStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleStopAction {
	Position: *f64,
	Scope: *string,
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleWorkmailAction <a name="SesReceiptRuleWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

&sesreceiptrule.SesReceiptRuleWorkmailAction {
	OrganizationArn: *string,
	Position: *f64,
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn">OrganizationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `OrganizationArn`<sup>Required</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn"></a>

```go
OrganizationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptRuleAddHeaderActionList <a name="SesReceiptRuleAddHeaderActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleAddHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleAddHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleAddHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleAddHeaderActionOutputReference <a name="SesReceiptRuleAddHeaderActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleAddHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleAddHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleBounceActionList <a name="SesReceiptRuleBounceActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleBounceActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleBounceActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleBounceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleBounceActionOutputReference <a name="SesReceiptRuleBounceActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleBounceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleBounceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput">SenderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput">SmtpReplyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender">Sender</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode">SmtpReplyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `SenderInput`<sup>Optional</sup> <a name="SenderInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput"></a>

```go
func SenderInput() *string
```

- *Type:* *string

---

##### `SmtpReplyCodeInput`<sup>Optional</sup> <a name="SmtpReplyCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput"></a>

```go
func SmtpReplyCodeInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Sender`<sup>Required</sup> <a name="Sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender"></a>

```go
func Sender() *string
```

- *Type:* *string

---

##### `SmtpReplyCode`<sup>Required</sup> <a name="SmtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode"></a>

```go
func SmtpReplyCode() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleLambdaActionList <a name="SesReceiptRuleLambdaActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleLambdaActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleLambdaActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleLambdaActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleLambdaActionOutputReference <a name="SesReceiptRuleLambdaActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleLambdaActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleLambdaActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType"></a>

```go
func ResetInvocationType()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput"></a>

```go
func InvocationTypeInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleS3ActionList <a name="SesReceiptRuleS3ActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleS3ActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleS3ActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleS3ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleS3ActionOutputReference <a name="SesReceiptRuleS3ActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleS3ActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleS3ActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix">ResetObjectKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetObjectKeyPrefix` <a name="ResetObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix"></a>

```go
func ResetObjectKeyPrefix()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput">ObjectKeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `ObjectKeyPrefixInput`<sup>Optional</sup> <a name="ObjectKeyPrefixInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput"></a>

```go
func ObjectKeyPrefixInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `ObjectKeyPrefix`<sup>Required</sup> <a name="ObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix"></a>

```go
func ObjectKeyPrefix() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleSnsActionList <a name="SesReceiptRuleSnsActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleSnsActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleSnsActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleSnsActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleSnsActionOutputReference <a name="SesReceiptRuleSnsActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleSnsActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleSnsActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleStopActionList <a name="SesReceiptRuleStopActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleStopActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleStopActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleStopActionOutputReference <a name="SesReceiptRuleStopActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleStopActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleStopActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleWorkmailActionList <a name="SesReceiptRuleWorkmailActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleWorkmailActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesReceiptRuleWorkmailActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get"></a>

```go
func Get(index *f64) SesReceiptRuleWorkmailActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesReceiptRuleWorkmailActionOutputReference <a name="SesReceiptRuleWorkmailActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesreceiptrule"

sesreceiptrule.NewSesReceiptRuleWorkmailActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesReceiptRuleWorkmailActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput">OrganizationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn">OrganizationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationArnInput`<sup>Optional</sup> <a name="OrganizationArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput"></a>

```go
func OrganizationArnInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `OrganizationArn`<sup>Required</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn"></a>

```go
func OrganizationArn() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



