# `albListener` Submodule <a name="`albListener` Submodule" id="@cdktf/provider-aws.albListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbListener <a name="AlbListener" id="@cdktf/provider-aws.albListener.AlbListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener aws_alb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListener(scope Construct, id *string, config AlbListenerConfig) AlbListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig">AlbListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerConfig">AlbListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putDefaultAction">PutDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putMutualAuthentication">PutMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy">ResetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetMutualAuthentication">ResetMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName">ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznTlsVersionHeaderName">ResetRoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue">ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue">ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue">ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowOriginHeaderValue">ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue">ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlMaxAgeHeaderValue">ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseContentSecurityPolicyHeaderValue">ResetRoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseServerEnabled">ResetRoutingHttpResponseServerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseStrictTransportSecurityHeaderValue">ResetRoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseXContentTypeOptionsHeaderValue">ResetRoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseXFrameOptionsHeaderValue">ResetRoutingHttpResponseXFrameOptionsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTcpIdleTimeoutSeconds">ResetTcpIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.albListener.AlbListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.albListener.AlbListener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.albListener.AlbListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.albListener.AlbListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.albListener.AlbListener.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.albListener.AlbListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.albListener.AlbListener.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.albListener.AlbListener.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.albListener.AlbListener.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.albListener.AlbListener.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.albListener.AlbListener.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListener.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.albListener.AlbListener.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultAction` <a name="PutDefaultAction" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction"></a>

```go
func PutDefaultAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMutualAuthentication` <a name="PutMutualAuthentication" id="@cdktf/provider-aws.albListener.AlbListener.putMutualAuthentication"></a>

```go
func PutMutualAuthentication(value AlbListenerMutualAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts"></a>

```go
func PutTimeouts(value AlbListenerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

---

##### `ResetAlpnPolicy` <a name="ResetAlpnPolicy" id="@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy"></a>

```go
func ResetAlpnPolicy()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.albListener.AlbListener.resetId"></a>

```go
func ResetId()
```

##### `ResetMutualAuthentication` <a name="ResetMutualAuthentication" id="@cdktf/provider-aws.albListener.AlbListener.resetMutualAuthentication"></a>

```go
func ResetMutualAuthentication()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.albListener.AlbListener.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.albListener.AlbListener.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.albListener.AlbListener.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName()
```

##### `ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName` <a name="ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName()
```

##### `ResetRoutingHttpRequestXAmznTlsVersionHeaderName` <a name="ResetRoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznTlsVersionHeaderName()
```

##### `ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue` <a name="ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue` <a name="ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue()
```

##### `ResetRoutingHttpResponseContentSecurityPolicyHeaderValue` <a name="ResetRoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
func ResetRoutingHttpResponseContentSecurityPolicyHeaderValue()
```

##### `ResetRoutingHttpResponseServerEnabled` <a name="ResetRoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseServerEnabled"></a>

```go
func ResetRoutingHttpResponseServerEnabled()
```

##### `ResetRoutingHttpResponseStrictTransportSecurityHeaderValue` <a name="ResetRoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
func ResetRoutingHttpResponseStrictTransportSecurityHeaderValue()
```

##### `ResetRoutingHttpResponseXContentTypeOptionsHeaderValue` <a name="ResetRoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
func ResetRoutingHttpResponseXContentTypeOptionsHeaderValue()
```

##### `ResetRoutingHttpResponseXFrameOptionsHeaderValue` <a name="ResetRoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.resetRoutingHttpResponseXFrameOptionsHeaderValue"></a>

```go
func ResetRoutingHttpResponseXFrameOptionsHeaderValue()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.albListener.AlbListener.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.albListener.AlbListener.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTcpIdleTimeoutSeconds` <a name="ResetTcpIdleTimeoutSeconds" id="@cdktf/provider-aws.albListener.AlbListener.resetTcpIdleTimeoutSeconds"></a>

```go
func ResetTcpIdleTimeoutSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.albListener.AlbListener.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlbListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.AlbListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.AlbListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.AlbListener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.AlbListener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlbListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlbListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlbListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlbListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference">AlbListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput">AlpnPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput">DefaultActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.mutualAuthenticationInput">MutualAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput">RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsVersionHeaderNameInput">RoutingHttpRequestXAmznTlsVersionHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValueInput">RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValueInput">RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValueInput">RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValueInput">RoutingHttpResponseAccessControlAllowOriginHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValueInput">RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValueInput">RoutingHttpResponseAccessControlMaxAgeHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseContentSecurityPolicyHeaderValueInput">RoutingHttpResponseContentSecurityPolicyHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseServerEnabledInput">RoutingHttpResponseServerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseStrictTransportSecurityHeaderValueInput">RoutingHttpResponseStrictTransportSecurityHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXContentTypeOptionsHeaderValueInput">RoutingHttpResponseXContentTypeOptionsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXFrameOptionsHeaderValueInput">RoutingHttpResponseXFrameOptionsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tcpIdleTimeoutSecondsInput">TcpIdleTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy">AlpnPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderName">RoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName">RoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsVersionHeaderName">RoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue">RoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValue">RoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValue">RoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValue">RoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValue">RoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValue">RoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseContentSecurityPolicyHeaderValue">RoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseServerEnabled">RoutingHttpResponseServerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseStrictTransportSecurityHeaderValue">RoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXContentTypeOptionsHeaderValue">RoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXFrameOptionsHeaderValue">RoutingHttpResponseXFrameOptionsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.albListener.AlbListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albListener.AlbListener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albListener.AlbListener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albListener.AlbListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albListener.AlbListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albListener.AlbListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albListener.AlbListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albListener.AlbListener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListener.AlbListener.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultAction"></a>

```go
func DefaultAction() AlbListenerDefaultActionList
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a>

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktf/provider-aws.albListener.AlbListener.property.mutualAuthentication"></a>

```go
func MutualAuthentication() AlbListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference">AlbListenerMutualAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.albListener.AlbListener.property.timeouts"></a>

```go
func Timeouts() AlbListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a>

---

##### `AlpnPolicyInput`<sup>Optional</sup> <a name="AlpnPolicyInput" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput"></a>

```go
func AlpnPolicyInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput"></a>

```go
func DefaultActionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.albListener.AlbListener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `MutualAuthenticationInput`<sup>Optional</sup> <a name="MutualAuthenticationInput" id="@cdktf/provider-aws.albListener.AlbListener.property.mutualAuthenticationInput"></a>

```go
func MutualAuthenticationInput() AlbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.albListener.AlbListener.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.albListener.AlbListener.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.albListener.AlbListener.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderNameInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsVersionHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznTlsVersionHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowOriginHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlMaxAgeHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseContentSecurityPolicyHeaderValueInput"></a>

```go
func RoutingHttpResponseContentSecurityPolicyHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseServerEnabledInput`<sup>Optional</sup> <a name="RoutingHttpResponseServerEnabledInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseServerEnabledInput"></a>

```go
func RoutingHttpResponseServerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseStrictTransportSecurityHeaderValueInput"></a>

```go
func RoutingHttpResponseStrictTransportSecurityHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXContentTypeOptionsHeaderValueInput"></a>

```go
func RoutingHttpResponseXContentTypeOptionsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXFrameOptionsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValueInput" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXFrameOptionsHeaderValueInput"></a>

```go
func RoutingHttpResponseXFrameOptionsHeaderValueInput() *string
```

- *Type:* *string

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TcpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="TcpIdleTimeoutSecondsInput" id="@cdktf/provider-aws.albListener.AlbListener.property.tcpIdleTimeoutSecondsInput"></a>

```go
func TcpIdleTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy"></a>

```go
func AlpnPolicy() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.albListener.AlbListener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.albListener.AlbListener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.albListener.AlbListener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.albListener.AlbListener.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
func RoutingHttpRequestXAmznTlsCipherSuiteHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
func RoutingHttpRequestXAmznTlsVersionHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowCredentialsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowHeadersHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowMethodsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowOriginHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlExposeHeadersHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlMaxAgeHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
func RoutingHttpResponseContentSecurityPolicyHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseServerEnabled`<sup>Required</sup> <a name="RoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseServerEnabled"></a>

```go
func RoutingHttpResponseServerEnabled() interface{}
```

- *Type:* interface{}

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
func RoutingHttpResponseStrictTransportSecurityHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
func RoutingHttpResponseXContentTypeOptionsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXFrameOptionsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListener.property.routingHttpResponseXFrameOptionsHeaderValue"></a>

```go
func RoutingHttpResponseXFrameOptionsHeaderValue() *string
```

- *Type:* *string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.albListener.AlbListener.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TcpIdleTimeoutSeconds`<sup>Required</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktf/provider-aws.albListener.AlbListener.property.tcpIdleTimeoutSeconds"></a>

```go
func TcpIdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbListenerConfig <a name="AlbListenerConfig" id="@cdktf/provider-aws.albListener.AlbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAction: interface{},
	LoadBalancerArn: *string,
	AlpnPolicy: *string,
	CertificateArn: *string,
	Id: *string,
	MutualAuthentication: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerMutualAuthentication,
	Port: *f64,
	Protocol: *string,
	Region: *string,
	RoutingHttpRequestXAmznMtlsClientcertHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName: *string,
	RoutingHttpRequestXAmznTlsCipherSuiteHeaderName: *string,
	RoutingHttpRequestXAmznTlsVersionHeaderName: *string,
	RoutingHttpResponseAccessControlAllowCredentialsHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowHeadersHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowMethodsHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowOriginHeaderValue: *string,
	RoutingHttpResponseAccessControlExposeHeadersHeaderValue: *string,
	RoutingHttpResponseAccessControlMaxAgeHeaderValue: *string,
	RoutingHttpResponseContentSecurityPolicyHeaderValue: *string,
	RoutingHttpResponseServerEnabled: interface{},
	RoutingHttpResponseStrictTransportSecurityHeaderValue: *string,
	RoutingHttpResponseXContentTypeOptionsHeaderValue: *string,
	RoutingHttpResponseXFrameOptionsHeaderValue: *string,
	SslPolicy: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TcpIdleTimeoutSeconds: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction">DefaultAction</a></code> | <code>interface{}</code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy">AlpnPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#alpn_policy AlbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#certificate_arn AlbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#id AlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a></code> | mutual_authentication block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertHeaderName">RoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName">RoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name AlbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznTlsVersionHeaderName">RoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_version_header_name AlbListener#routing_http_request_x_amzn_tls_version_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue">RoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_credentials_header_value AlbListener#routing_http_response_access_control_allow_credentials_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowHeadersHeaderValue">RoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_headers_header_value AlbListener#routing_http_response_access_control_allow_headers_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowMethodsHeaderValue">RoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_methods_header_value AlbListener#routing_http_response_access_control_allow_methods_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowOriginHeaderValue">RoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_origin_header_value AlbListener#routing_http_response_access_control_allow_origin_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlExposeHeadersHeaderValue">RoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_expose_headers_header_value AlbListener#routing_http_response_access_control_expose_headers_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlMaxAgeHeaderValue">RoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_max_age_header_value AlbListener#routing_http_response_access_control_max_age_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseContentSecurityPolicyHeaderValue">RoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_content_security_policy_header_value AlbListener#routing_http_response_content_security_policy_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseServerEnabled">RoutingHttpResponseServerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_server_enabled AlbListener#routing_http_response_server_enabled}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseStrictTransportSecurityHeaderValue">RoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_strict_transport_security_header_value AlbListener#routing_http_response_strict_transport_security_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseXContentTypeOptionsHeaderValue">RoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_x_content_type_options_header_value AlbListener#routing_http_response_x_content_type_options_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseXFrameOptionsHeaderValue">RoutingHttpResponseXFrameOptionsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_x_frame_options_header_value AlbListener#routing_http_response_x_frame_options_header_value}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#ssl_policy AlbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tags AlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tags_all AlbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tcp_idle_timeout_seconds AlbListener#tcp_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction"></a>

```go
DefaultAction interface{}
```

- *Type:* interface{}

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#default_action AlbListener#default_action}

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}.

---

##### `AlpnPolicy`<sup>Optional</sup> <a name="AlpnPolicy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy"></a>

```go
AlpnPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#alpn_policy AlbListener#alpn_policy}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#certificate_arn AlbListener#certificate_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#id AlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualAuthentication`<sup>Optional</sup> <a name="MutualAuthentication" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.mutualAuthentication"></a>

```go
MutualAuthentication AlbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a>

mutual_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#mutual_authentication AlbListener#mutual_authentication}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#port AlbListener#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#protocol AlbListener#protocol}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#region AlbListener#region}

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}.

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
RoutingHttpRequestXAmznTlsCipherSuiteHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name AlbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}.

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
RoutingHttpRequestXAmznTlsVersionHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_version_header_name AlbListener#routing_http_request_x_amzn_tls_version_header_name}.

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowCredentialsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_credentials_header_value AlbListener#routing_http_response_access_control_allow_credentials_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowHeadersHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_headers_header_value AlbListener#routing_http_response_access_control_allow_headers_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowMethodsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_methods_header_value AlbListener#routing_http_response_access_control_allow_methods_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowOriginHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_allow_origin_header_value AlbListener#routing_http_response_access_control_allow_origin_header_value}.

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
RoutingHttpResponseAccessControlExposeHeadersHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_expose_headers_header_value AlbListener#routing_http_response_access_control_expose_headers_header_value}.

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
RoutingHttpResponseAccessControlMaxAgeHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_access_control_max_age_header_value AlbListener#routing_http_response_access_control_max_age_header_value}.

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
RoutingHttpResponseContentSecurityPolicyHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_content_security_policy_header_value AlbListener#routing_http_response_content_security_policy_header_value}.

---

##### `RoutingHttpResponseServerEnabled`<sup>Optional</sup> <a name="RoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseServerEnabled"></a>

```go
RoutingHttpResponseServerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_server_enabled AlbListener#routing_http_response_server_enabled}.

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
RoutingHttpResponseStrictTransportSecurityHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_strict_transport_security_header_value AlbListener#routing_http_response_strict_transport_security_header_value}.

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
RoutingHttpResponseXContentTypeOptionsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_x_content_type_options_header_value AlbListener#routing_http_response_x_content_type_options_header_value}.

---

##### `RoutingHttpResponseXFrameOptionsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.routingHttpResponseXFrameOptionsHeaderValue"></a>

```go
RoutingHttpResponseXFrameOptionsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#routing_http_response_x_frame_options_header_value AlbListener#routing_http_response_x_frame_options_header_value}.

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#ssl_policy AlbListener#ssl_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tags AlbListener#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tags_all AlbListener#tags_all}.

---

##### `TcpIdleTimeoutSeconds`<sup>Optional</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tcpIdleTimeoutSeconds"></a>

```go
TcpIdleTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#tcp_idle_timeout_seconds AlbListener#tcp_idle_timeout_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts"></a>

```go
Timeouts AlbListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#timeouts AlbListener#timeouts}

---

### AlbListenerDefaultAction <a name="AlbListenerDefaultAction" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultAction {
	Type: *string,
	AuthenticateCognito: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionAuthenticateCognito,
	AuthenticateOidc: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionAuthenticateOidc,
	FixedResponse: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionFixedResponse,
	Forward: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionForward,
	Order: *f64,
	Redirect: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionRedirect,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#type AlbListener#type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#order AlbListener#order}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#target_group_arn AlbListener#target_group_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#type AlbListener#type}.

---

##### `AuthenticateCognito`<sup>Optional</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito"></a>

```go
AuthenticateCognito AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authenticate_cognito AlbListener#authenticate_cognito}

---

##### `AuthenticateOidc`<sup>Optional</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc"></a>

```go
AuthenticateOidc AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authenticate_oidc AlbListener#authenticate_oidc}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse"></a>

```go
FixedResponse AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#fixed_response AlbListener#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward"></a>

```go
Forward AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#forward AlbListener#forward}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#order AlbListener#order}.

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect"></a>

```go
Redirect AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#redirect AlbListener#redirect}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#target_group_arn AlbListener#target_group_arn}.

---

### AlbListenerDefaultActionAuthenticateCognito <a name="AlbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionAuthenticateCognito {
	UserPoolArn: *string,
	UserPoolClientId: *string,
	UserPoolDomain: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_arn AlbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_domain AlbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_arn AlbListener#user_pool_arn}.

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```go
UserPoolClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}.

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```go
UserPoolDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_pool_domain AlbListener#user_pool_domain}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#scope AlbListener#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionAuthenticateOidc <a name="AlbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionAuthenticateOidc {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#client_id AlbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#client_secret AlbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#issuer AlbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#token_endpoint AlbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#client_id AlbListener#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#client_secret AlbListener#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#issuer AlbListener#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#token_endpoint AlbListener#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#scope AlbListener#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionFixedResponse <a name="AlbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionFixedResponse {
	ContentType: *string,
	MessageBody: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#content_type AlbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody">MessageBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#message_body AlbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#status_code AlbListener#status_code}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#content_type AlbListener#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#message_body AlbListener#message_body}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#status_code AlbListener#status_code}.

---

### AlbListenerDefaultActionForward <a name="AlbListenerDefaultActionForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionForward {
	TargetGroup: interface{},
	Stickiness: github.com/cdktf/cdktf-provider-aws-go/aws/v21.albListener.AlbListenerDefaultActionForwardStickiness,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup">TargetGroup</a></code> | <code>interface{}</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup"></a>

```go
TargetGroup interface{}
```

- *Type:* interface{}

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#target_group AlbListener#target_group}

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness"></a>

```go
Stickiness AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#stickiness AlbListener#stickiness}

---

### AlbListenerDefaultActionForwardStickiness <a name="AlbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionForwardStickiness {
	Duration: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#duration AlbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#enabled AlbListener#enabled}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#duration AlbListener#duration}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#enabled AlbListener#enabled}.

---

### AlbListenerDefaultActionForwardTargetGroup <a name="AlbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionForwardTargetGroup {
	Arn: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#arn AlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#weight AlbListener#weight}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#arn AlbListener#arn}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#weight AlbListener#weight}.

---

### AlbListenerDefaultActionRedirect <a name="AlbListenerDefaultActionRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerDefaultActionRedirect {
	StatusCode: *string,
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#status_code AlbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#host AlbListener#host}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#path AlbListener#path}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#query AlbListener#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#status_code AlbListener#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#host AlbListener#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#path AlbListener#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#port AlbListener#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#protocol AlbListener#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#query AlbListener#query}.

---

### AlbListenerMutualAuthentication <a name="AlbListenerMutualAuthentication" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerMutualAuthentication {
	Mode: *string,
	AdvertiseTrustStoreCaNames: *string,
	IgnoreClientCertificateExpiry: interface{},
	TrustStoreArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#mode AlbListener#mode}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#advertise_trust_store_ca_names AlbListener#advertise_trust_store_ca_names}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#ignore_client_certificate_expiry AlbListener#ignore_client_certificate_expiry}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#trust_store_arn AlbListener#trust_store_arn}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#mode AlbListener#mode}.

---

##### `AdvertiseTrustStoreCaNames`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```go
AdvertiseTrustStoreCaNames *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#advertise_trust_store_ca_names AlbListener#advertise_trust_store_ca_names}.

---

##### `IgnoreClientCertificateExpiry`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```go
IgnoreClientCertificateExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#ignore_client_certificate_expiry AlbListener#ignore_client_certificate_expiry}.

---

##### `TrustStoreArn`<sup>Optional</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication.property.trustStoreArn"></a>

```go
TrustStoreArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#trust_store_arn AlbListener#trust_store_arn}.

---

### AlbListenerTimeouts <a name="AlbListenerTimeouts" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

&alblistener.AlbListenerTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#create AlbListener#create}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#update AlbListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#create AlbListener#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/alb_listener#update AlbListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbListenerDefaultActionAuthenticateCognitoOutputReference <a name="AlbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionAuthenticateCognitoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```go
func UserPoolClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```go
func UserPoolDomainInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---


### AlbListenerDefaultActionAuthenticateOidcOutputReference <a name="AlbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionAuthenticateOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---


### AlbListenerDefaultActionFixedResponseOutputReference <a name="AlbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---


### AlbListenerDefaultActionForwardOutputReference <a name="AlbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness">ResetStickiness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```go
func PutStickiness(value AlbListenerDefaultActionForwardStickiness)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```go
func PutTargetGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```go
func ResetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```go
func Stickiness() AlbListenerDefaultActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```go
func TargetGroup() AlbListenerDefaultActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a>

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```go
func StickinessInput() AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```go
func TargetGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---


### AlbListenerDefaultActionForwardStickinessOutputReference <a name="AlbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionForwardStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionForwardStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---


### AlbListenerDefaultActionForwardTargetGroupList <a name="AlbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionForwardTargetGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerDefaultActionForwardTargetGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get"></a>

```go
func Get(index *f64) AlbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerDefaultActionForwardTargetGroupOutputReference <a name="AlbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionForwardTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerDefaultActionForwardTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerDefaultActionList <a name="AlbListenerDefaultActionList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerDefaultActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get"></a>

```go
func Get(index *f64) AlbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerDefaultActionOutputReference <a name="AlbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerDefaultActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito">PutAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc">PutAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito">ResetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc">ResetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognito` <a name="PutAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```go
func PutAuthenticateCognito(value AlbListenerDefaultActionAuthenticateCognito)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---

##### `PutAuthenticateOidc` <a name="PutAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```go
func PutAuthenticateOidc(value AlbListenerDefaultActionAuthenticateOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse"></a>

```go
func PutFixedResponse(value AlbListenerDefaultActionFixedResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward"></a>

```go
func PutForward(value AlbListenerDefaultActionForward)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect"></a>

```go
func PutRedirect(value AlbListenerDefaultActionRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---

##### `ResetAuthenticateCognito` <a name="ResetAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```go
func ResetAuthenticateCognito()
```

##### `ResetAuthenticateOidc` <a name="ResetAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```go
func ResetAuthenticateOidc()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```go
func ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward"></a>

```go
func ResetForward()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput">AuthenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput">AuthenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```go
func AuthenticateCognito() AlbListenerDefaultActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```go
func AuthenticateOidc() AlbListenerDefaultActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() AlbListenerDefaultActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward"></a>

```go
func Forward() AlbListenerDefaultActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect"></a>

```go
func Redirect() AlbListenerDefaultActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a>

---

##### `AuthenticateCognitoInput`<sup>Optional</sup> <a name="AuthenticateCognitoInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```go
func AuthenticateCognitoInput() AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---

##### `AuthenticateOidcInput`<sup>Optional</sup> <a name="AuthenticateOidcInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```go
func AuthenticateOidcInput() AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```go
func FixedResponseInput() AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput"></a>

```go
func ForwardInput() AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput"></a>

```go
func RedirectInput() AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerDefaultActionRedirectOutputReference <a name="AlbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerDefaultActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerDefaultActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---


### AlbListenerMutualAuthenticationOutputReference <a name="AlbListenerMutualAuthenticationOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerMutualAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerMutualAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">ResetAdvertiseTrustStoreCaNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">ResetIgnoreClientCertificateExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetTrustStoreArn">ResetTrustStoreArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertiseTrustStoreCaNames` <a name="ResetAdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```go
func ResetAdvertiseTrustStoreCaNames()
```

##### `ResetIgnoreClientCertificateExpiry` <a name="ResetIgnoreClientCertificateExpiry" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```go
func ResetIgnoreClientCertificateExpiry()
```

##### `ResetTrustStoreArn` <a name="ResetTrustStoreArn" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```go
func ResetTrustStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">AdvertiseTrustStoreCaNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">IgnoreClientCertificateExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">TrustStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNamesInput`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNamesInput" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```go
func AdvertiseTrustStoreCaNamesInput() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiryInput`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiryInput" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```go
func IgnoreClientCertificateExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `TrustStoreArnInput`<sup>Optional</sup> <a name="TrustStoreArnInput" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```go
func TrustStoreArnInput() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNames`<sup>Required</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```go
func AdvertiseTrustStoreCaNames() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiry`<sup>Required</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```go
func IgnoreClientCertificateExpiry() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerMutualAuthentication">AlbListenerMutualAuthentication</a>

---


### AlbListenerTimeoutsOutputReference <a name="AlbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alblistener"

alblistener.NewAlbListenerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



