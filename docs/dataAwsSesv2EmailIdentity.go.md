# `dataAwsSesv2EmailIdentity` Submodule <a name="`dataAwsSesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentity <a name="DataAwsSesv2EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.NewDataAwsSesv2EmailIdentity(scope Construct, id *string, config DataAwsSesv2EmailIdentityConfig) DataAwsSesv2EmailIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.DataAwsSesv2EmailIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.DataAwsSesv2EmailIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.DataAwsSesv2EmailIdentity_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.DataAwsSesv2EmailIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSesv2EmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSesv2EmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus">VerifiedForSendingStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `DkimSigningAttributes`<sup>Required</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes"></a>

```go
func DkimSigningAttributes() DataAwsSesv2EmailIdentityDkimSigningAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a>

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `VerifiedForSendingStatus`<sup>Required</sup> <a name="VerifiedForSendingStatus" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```go
func VerifiedForSendingStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput"></a>

```go
func EmailIdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity"></a>

```go
func EmailIdentity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityConfig <a name="DataAwsSesv2EmailIdentityConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

&dataawssesv2emailidentity.DataAwsSesv2EmailIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EmailIdentity: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity"></a>

```go
EmailIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}.

---

### DataAwsSesv2EmailIdentityDkimSigningAttributes <a name="DataAwsSesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

&dataawssesv2emailidentity.DataAwsSesv2EmailIdentityDkimSigningAttributes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2EmailIdentityDkimSigningAttributesList <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesList" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.NewDataAwsSesv2EmailIdentityDkimSigningAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSesv2EmailIdentityDkimSigningAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get"></a>

```go
func Get(index *f64) DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssesv2emailidentity"

dataawssesv2emailidentity.NewDataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">CurrentSigningKeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">LastKeyGenerationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">SigningAttributesOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">Tokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentSigningKeyLength`<sup>Required</sup> <a name="CurrentSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```go
func CurrentSigningKeyLength() *string
```

- *Type:* *string

---

##### `DomainSigningPrivateKey`<sup>Required</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```go
func DomainSigningPrivateKey() *string
```

- *Type:* *string

---

##### `DomainSigningSelector`<sup>Required</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```go
func DomainSigningSelector() *string
```

- *Type:* *string

---

##### `LastKeyGenerationTimestamp`<sup>Required</sup> <a name="LastKeyGenerationTimestamp" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```go
func LastKeyGenerationTimestamp() *string
```

- *Type:* *string

---

##### `NextSigningKeyLength`<sup>Required</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```go
func NextSigningKeyLength() *string
```

- *Type:* *string

---

##### `SigningAttributesOrigin`<sup>Required</sup> <a name="SigningAttributesOrigin" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```go
func SigningAttributesOrigin() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```go
func Tokens() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a>

---



