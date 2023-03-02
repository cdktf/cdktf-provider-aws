# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktf/provider-aws.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration aws_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2Integration;

Apigatewayv2Integration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .integrationType(java.lang.String)
//  .connectionId(java.lang.String)
//  .connectionType(java.lang.String)
//  .contentHandlingStrategy(java.lang.String)
//  .credentialsArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationMethod(java.lang.String)
//  .integrationSubtype(java.lang.String)
//  .integrationUri(java.lang.String)
//  .passthroughBehavior(java.lang.String)
//  .payloadFormatVersion(java.lang.String)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .responseParameters(IResolvable)
//  .responseParameters(java.util.List<Apigatewayv2IntegrationResponseParameters>)
//  .templateSelectionExpression(java.lang.String)
//  .timeoutMilliseconds(java.lang.Number)
//  .tlsConfig(Apigatewayv2IntegrationTlsConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod">integrationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype">integrationSubtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri">integrationUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion">payloadFormatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters">responseParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>></code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationMethod`<sup>Optional</sup> <a name="integrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `integrationSubtype`<sup>Optional</sup> <a name="integrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `integrationUri`<sup>Optional</sup> <a name="integrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="payloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>>

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutMilliseconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">putResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">resetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">resetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">resetIntegrationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">resetIntegrationSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">resetIntegrationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">resetPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">resetTemplateSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putResponseParameters` <a name="putResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```java
public void putResponseParameters(IResolvable OR java.util.List<Apigatewayv2IntegrationResponseParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```java
public void putTlsConfig(Apigatewayv2IntegrationTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetContentHandlingStrategy` <a name="resetContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```java
public void resetContentHandlingStrategy()
```

##### `resetCredentialsArn` <a name="resetCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```java
public void resetCredentialsArn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationMethod` <a name="resetIntegrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```java
public void resetIntegrationMethod()
```

##### `resetIntegrationSubtype` <a name="resetIntegrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```java
public void resetIntegrationSubtype()
```

##### `resetIntegrationUri` <a name="resetIntegrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```java
public void resetIntegrationUri()
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```java
public void resetPassthroughBehavior()
```

##### `resetPayloadFormatVersion` <a name="resetPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```java
public void resetPayloadFormatVersion()
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```java
public void resetRequestParameters()
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```java
public void resetRequestTemplates()
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```java
public void resetResponseParameters()
```

##### `resetTemplateSelectionExpression` <a name="resetTemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```java
public void resetTemplateSelectionExpression()
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds"></a>

```java
public void resetTimeoutMilliseconds()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2Integration;

Apigatewayv2Integration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2Integration;

Apigatewayv2Integration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2Integration;

Apigatewayv2Integration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression">integrationResponseSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">contentHandlingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">credentialsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">integrationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">integrationSubtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">integrationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">payloadFormatVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">requestParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">responseParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">templateSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">integrationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">integrationSubtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">integrationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationResponseSelectionExpression`<sup>Required</sup> <a name="integrationResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression"></a>

```java
public java.lang.String getIntegrationResponseSelectionExpression();
```

- *Type:* java.lang.String

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```java
public Apigatewayv2IntegrationResponseParametersList getResponseParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```java
public Apigatewayv2IntegrationTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `contentHandlingStrategyInput`<sup>Optional</sup> <a name="contentHandlingStrategyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```java
public java.lang.String getContentHandlingStrategyInput();
```

- *Type:* java.lang.String

---

##### `credentialsArnInput`<sup>Optional</sup> <a name="credentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```java
public java.lang.String getCredentialsArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationMethodInput`<sup>Optional</sup> <a name="integrationMethodInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```java
public java.lang.String getIntegrationMethodInput();
```

- *Type:* java.lang.String

---

##### `integrationSubtypeInput`<sup>Optional</sup> <a name="integrationSubtypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```java
public java.lang.String getIntegrationSubtypeInput();
```

- *Type:* java.lang.String

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `integrationUriInput`<sup>Optional</sup> <a name="integrationUriInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```java
public java.lang.String getIntegrationUriInput();
```

- *Type:* java.lang.String

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```java
public java.lang.String getPassthroughBehaviorInput();
```

- *Type:* java.lang.String

---

##### `payloadFormatVersionInput`<sup>Optional</sup> <a name="payloadFormatVersionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```java
public java.lang.String getPayloadFormatVersionInput();
```

- *Type:* java.lang.String

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```java
public java.lang.Object getResponseParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>>

---

##### `templateSelectionExpressionInput`<sup>Optional</sup> <a name="templateSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```java
public java.lang.String getTemplateSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput"></a>

```java
public java.lang.Number getTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```java
public Apigatewayv2IntegrationTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="contentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```java
public java.lang.String getContentHandlingStrategy();
```

- *Type:* java.lang.String

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```java
public java.lang.String getCredentialsArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationMethod`<sup>Required</sup> <a name="integrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```java
public java.lang.String getIntegrationMethod();
```

- *Type:* java.lang.String

---

##### `integrationSubtype`<sup>Required</sup> <a name="integrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```java
public java.lang.String getIntegrationSubtype();
```

- *Type:* java.lang.String

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `integrationUri`<sup>Required</sup> <a name="integrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```java
public java.lang.String getIntegrationUri();
```

- *Type:* java.lang.String

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="payloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```java
public java.lang.String getPayloadFormatVersion();
```

- *Type:* java.lang.String

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="templateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```java
public java.lang.String getTemplateSelectionExpression();
```

- *Type:* java.lang.String

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationConfig;

Apigatewayv2IntegrationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .integrationType(java.lang.String)
//  .connectionId(java.lang.String)
//  .connectionType(java.lang.String)
//  .contentHandlingStrategy(java.lang.String)
//  .credentialsArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationMethod(java.lang.String)
//  .integrationSubtype(java.lang.String)
//  .integrationUri(java.lang.String)
//  .passthroughBehavior(java.lang.String)
//  .payloadFormatVersion(java.lang.String)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .responseParameters(IResolvable)
//  .responseParameters(java.util.List<Apigatewayv2IntegrationResponseParameters>)
//  .templateSelectionExpression(java.lang.String)
//  .timeoutMilliseconds(java.lang.Number)
//  .tlsConfig(Apigatewayv2IntegrationTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">integrationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">integrationSubtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">integrationUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">responseParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>></code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```java
public java.lang.String getContentHandlingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```java
public java.lang.String getCredentialsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationMethod`<sup>Optional</sup> <a name="integrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```java
public java.lang.String getIntegrationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `integrationSubtype`<sup>Optional</sup> <a name="integrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```java
public java.lang.String getIntegrationSubtype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `integrationUri`<sup>Optional</sup> <a name="integrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```java
public java.lang.String getIntegrationUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="payloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```java
public java.lang.String getPayloadFormatVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```java
public java.lang.Object getResponseParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>>

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```java
public java.lang.String getTemplateSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```java
public Apigatewayv2IntegrationTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationResponseParameters;

Apigatewayv2IntegrationResponseParameters.builder()
    .mappings(java.util.Map<java.lang.String, java.lang.String>)
    .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings">mappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationTlsConfig;

Apigatewayv2IntegrationTlsConfig.builder()
//  .serverNameToVerify(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">serverNameToVerify</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `serverNameToVerify`<sup>Optional</sup> <a name="serverNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```java
public java.lang.String getServerNameToVerify();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersList" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationResponseParametersList;

new Apigatewayv2IntegrationResponseParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get"></a>

```java
public Apigatewayv2IntegrationResponseParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>>

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationResponseParametersOutputReference;

new Apigatewayv2IntegrationResponseParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings">mappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a> OR com.hashicorp.cdktf.IResolvable

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_integration.Apigatewayv2IntegrationTlsConfigOutputReference;

new Apigatewayv2IntegrationTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">resetServerNameToVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerNameToVerify` <a name="resetServerNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```java
public void resetServerNameToVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">serverNameToVerifyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">serverNameToVerify</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverNameToVerifyInput`<sup>Optional</sup> <a name="serverNameToVerifyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```java
public java.lang.String getServerNameToVerifyInput();
```

- *Type:* java.lang.String

---

##### `serverNameToVerify`<sup>Required</sup> <a name="serverNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```java
public java.lang.String getServerNameToVerify();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```java
public Apigatewayv2IntegrationTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



