# `dataAwsCognitoUserPoolSigningCertificate` Submodule <a name="`dataAwsCognitoUserPoolSigningCertificate` Submodule" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolSigningCertificate <a name="DataAwsCognitoUserPoolSigningCertificate" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate aws_cognito_user_pool_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

dataawscognitouserpoolsigningcertificate.NewDataAwsCognitoUserPoolSigningCertificate(scope Construct, id *string, config DataAwsCognitoUserPoolSigningCertificateConfig) DataAwsCognitoUserPoolSigningCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig">DataAwsCognitoUserPoolSigningCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig">DataAwsCognitoUserPoolSigningCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCognitoUserPoolSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

dataawscognitouserpoolsigningcertificate.DataAwsCognitoUserPoolSigningCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

dataawscognitouserpoolsigningcertificate.DataAwsCognitoUserPoolSigningCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

dataawscognitouserpoolsigningcertificate.DataAwsCognitoUserPoolSigningCertificate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

dataawscognitouserpoolsigningcertificate.DataAwsCognitoUserPoolSigningCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCognitoUserPoolSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCognitoUserPoolSigningCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCognitoUserPoolSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoUserPoolSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolSigningCertificateConfig <a name="DataAwsCognitoUserPoolSigningCertificateConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawscognitouserpoolsigningcertificate"

&dataawscognitouserpoolsigningcertificate.DataAwsCognitoUserPoolSigningCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#user_pool_id DataAwsCognitoUserPoolSigningCertificate#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#id DataAwsCognitoUserPoolSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#user_pool_id DataAwsCognitoUserPoolSigningCertificate#user_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#id DataAwsCognitoUserPoolSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_signing_certificate#region DataAwsCognitoUserPoolSigningCertificate#region}

---



