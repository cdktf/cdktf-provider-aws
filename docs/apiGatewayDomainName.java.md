# `apiGatewayDomainName` Submodule <a name="`apiGatewayDomainName` Submodule" id="@cdktf/provider-aws.apiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainName <a name="ApiGatewayDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainName;

ApiGatewayDomainName.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .certificateBody(java.lang.String)
//  .certificateChain(java.lang.String)
//  .certificateName(java.lang.String)
//  .certificatePrivateKey(java.lang.String)
//  .endpointConfiguration(ApiGatewayDomainNameEndpointConfiguration)
//  .id(java.lang.String)
//  .mutualTlsAuthentication(ApiGatewayDomainNameMutualTlsAuthentication)
//  .ownershipVerificationCertificateArn(java.lang.String)
//  .regionalCertificateArn(java.lang.String)
//  .regionalCertificateName(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificatePrivateKey">certificatePrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.regionalCertificateArn">regionalCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.regionalCertificateName">regionalCertificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateChain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `certificatePrivateKey`<sup>Optional</sup> <a name="certificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.certificatePrivateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.mutualTlsAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `ownershipVerificationCertificateArn`<sup>Optional</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.ownershipVerificationCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `regionalCertificateArn`<sup>Optional</sup> <a name="regionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.regionalCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `regionalCertificateName`<sup>Optional</sup> <a name="regionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.regionalCertificateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication">putMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody">resetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey">resetCertificatePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication">resetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn">resetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn">resetRegionalCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName">resetRegionalCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(ApiGatewayDomainNameEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `putMutualTlsAuthentication` <a name="putMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication"></a>

```java
public void putMutualTlsAuthentication(ApiGatewayDomainNameMutualTlsAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetCertificateBody` <a name="resetCertificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody"></a>

```java
public void resetCertificateBody()
```

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain"></a>

```java
public void resetCertificateChain()
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetCertificatePrivateKey` <a name="resetCertificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey"></a>

```java
public void resetCertificatePrivateKey()
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration"></a>

```java
public void resetEndpointConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId"></a>

```java
public void resetId()
```

##### `resetMutualTlsAuthentication` <a name="resetMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication"></a>

```java
public void resetMutualTlsAuthentication()
```

##### `resetOwnershipVerificationCertificateArn` <a name="resetOwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```java
public void resetOwnershipVerificationCertificateArn()
```

##### `resetRegionalCertificateArn` <a name="resetRegionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn"></a>

```java
public void resetRegionalCertificateArn()
```

##### `resetRegionalCertificateName` <a name="resetRegionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName"></a>

```java
public void resetRegionalCertificateName()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainName;

ApiGatewayDomainName.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainName;

ApiGatewayDomainName.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainName;

ApiGatewayDomainName.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate">certificateUploadDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName">cloudfrontDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId">cloudfrontZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName">regionalDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId">regionalZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput">certificateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput">certificatePrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput">mutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput">ownershipVerificationCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput">regionalCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput">regionalCertificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey">certificatePrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn">regionalCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName">regionalCertificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateUploadDate`<sup>Required</sup> <a name="certificateUploadDate" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate"></a>

```java
public java.lang.String getCertificateUploadDate();
```

- *Type:* java.lang.String

---

##### `cloudfrontDomainName`<sup>Required</sup> <a name="cloudfrontDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName"></a>

```java
public java.lang.String getCloudfrontDomainName();
```

- *Type:* java.lang.String

---

##### `cloudfrontZoneId`<sup>Required</sup> <a name="cloudfrontZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId"></a>

```java
public java.lang.String getCloudfrontZoneId();
```

- *Type:* java.lang.String

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration"></a>

```java
public ApiGatewayDomainNameEndpointConfigurationOutputReference getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

```java
public ApiGatewayDomainNameMutualTlsAuthenticationOutputReference getMutualTlsAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `regionalDomainName`<sup>Required</sup> <a name="regionalDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName"></a>

```java
public java.lang.String getRegionalDomainName();
```

- *Type:* java.lang.String

---

##### `regionalZoneId`<sup>Required</sup> <a name="regionalZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId"></a>

```java
public java.lang.String getRegionalZoneId();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `certificateBodyInput`<sup>Optional</sup> <a name="certificateBodyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput"></a>

```java
public java.lang.String getCertificateBodyInput();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `certificatePrivateKeyInput`<sup>Optional</sup> <a name="certificatePrivateKeyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput"></a>

```java
public java.lang.String getCertificatePrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput"></a>

```java
public ApiGatewayDomainNameEndpointConfiguration getEndpointConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mutualTlsAuthenticationInput`<sup>Optional</sup> <a name="mutualTlsAuthenticationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```java
public ApiGatewayDomainNameMutualTlsAuthentication getMutualTlsAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `ownershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="ownershipVerificationCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `regionalCertificateArnInput`<sup>Optional</sup> <a name="regionalCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput"></a>

```java
public java.lang.String getRegionalCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `regionalCertificateNameInput`<sup>Optional</sup> <a name="regionalCertificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput"></a>

```java
public java.lang.String getRegionalCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `certificateBody`<sup>Required</sup> <a name="certificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody"></a>

```java
public java.lang.String getCertificateBody();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `certificatePrivateKey`<sup>Required</sup> <a name="certificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey"></a>

```java
public java.lang.String getCertificatePrivateKey();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipVerificationCertificateArn`<sup>Required</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArn();
```

- *Type:* java.lang.String

---

##### `regionalCertificateArn`<sup>Required</sup> <a name="regionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn"></a>

```java
public java.lang.String getRegionalCertificateArn();
```

- *Type:* java.lang.String

---

##### `regionalCertificateName`<sup>Required</sup> <a name="regionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName"></a>

```java
public java.lang.String getRegionalCertificateName();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameConfig <a name="ApiGatewayDomainNameConfig" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainNameConfig;

ApiGatewayDomainNameConfig.builder()
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
    .domainName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .certificateBody(java.lang.String)
//  .certificateChain(java.lang.String)
//  .certificateName(java.lang.String)
//  .certificatePrivateKey(java.lang.String)
//  .endpointConfiguration(ApiGatewayDomainNameEndpointConfiguration)
//  .id(java.lang.String)
//  .mutualTlsAuthentication(ApiGatewayDomainNameMutualTlsAuthentication)
//  .ownershipVerificationCertificateArn(java.lang.String)
//  .regionalCertificateArn(java.lang.String)
//  .regionalCertificateName(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey">certificatePrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn">regionalCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName">regionalCertificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody"></a>

```java
public java.lang.String getCertificateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `certificatePrivateKey`<sup>Optional</sup> <a name="certificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey"></a>

```java
public java.lang.String getCertificatePrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration"></a>

```java
public ApiGatewayDomainNameEndpointConfiguration getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```java
public ApiGatewayDomainNameMutualTlsAuthentication getMutualTlsAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `ownershipVerificationCertificateArn`<sup>Optional</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `regionalCertificateArn`<sup>Optional</sup> <a name="regionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn"></a>

```java
public java.lang.String getRegionalCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `regionalCertificateName`<sup>Optional</sup> <a name="regionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName"></a>

```java
public java.lang.String getRegionalCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

### ApiGatewayDomainNameEndpointConfiguration <a name="ApiGatewayDomainNameEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainNameEndpointConfiguration;

ApiGatewayDomainNameEndpointConfiguration.builder()
    .types(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}. |

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}.

---

### ApiGatewayDomainNameMutualTlsAuthentication <a name="ApiGatewayDomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainNameMutualTlsAuthentication;

ApiGatewayDomainNameMutualTlsAuthentication.builder()
    .truststoreUri(java.lang.String)
//  .truststoreVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">truststoreVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}. |

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}.

---

##### `truststoreVersion`<sup>Optional</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```java
public java.lang.String getTruststoreVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDomainNameEndpointConfigurationOutputReference <a name="ApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainNameEndpointConfigurationOutputReference;

new ApiGatewayDomainNameEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```java
public java.util.List<java.lang.String> getTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public ApiGatewayDomainNameEndpointConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---


### ApiGatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApiGatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_domain_name.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference;

new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">resetTruststoreVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTruststoreVersion` <a name="resetTruststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```java
public void resetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststoreUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststoreVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststoreVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `truststoreUriInput`<sup>Optional</sup> <a name="truststoreUriInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```java
public java.lang.String getTruststoreUriInput();
```

- *Type:* java.lang.String

---

##### `truststoreVersionInput`<sup>Optional</sup> <a name="truststoreVersionInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```java
public java.lang.String getTruststoreVersionInput();
```

- *Type:* java.lang.String

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

---

##### `truststoreVersion`<sup>Required</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```java
public java.lang.String getTruststoreVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```java
public ApiGatewayDomainNameMutualTlsAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---



