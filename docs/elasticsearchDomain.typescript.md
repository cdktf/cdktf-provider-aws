# `elasticsearchDomain` Submodule <a name="`elasticsearchDomain` Submodule" id="@cdktf/provider-aws.elasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomain <a name="ElasticsearchDomain" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomain(scope: Construct, id: string, config: ElasticsearchDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig">ElasticsearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig">ElasticsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions">putAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions">putAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig">putClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions">putCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions">putDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions">putEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest">putEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption">putNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions">putSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies">resetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions">resetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions">resetAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig">resetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions">resetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions">resetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions">resetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion">resetElasticsearchVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest">resetEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption">resetNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions">resetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvancedSecurityOptions` <a name="putAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions"></a>

```typescript
public putAdvancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---

##### `putAutoTuneOptions` <a name="putAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions"></a>

```typescript
public putAutoTuneOptions(value: ElasticsearchDomainAutoTuneOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig"></a>

```typescript
public putClusterConfig(value: ElasticsearchDomainClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---

##### `putCognitoOptions` <a name="putCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions"></a>

```typescript
public putCognitoOptions(value: ElasticsearchDomainCognitoOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---

##### `putDomainEndpointOptions` <a name="putDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions"></a>

```typescript
public putDomainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---

##### `putEbsOptions` <a name="putEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions"></a>

```typescript
public putEbsOptions(value: ElasticsearchDomainEbsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---

##### `putEncryptAtRest` <a name="putEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest"></a>

```typescript
public putEncryptAtRest(value: ElasticsearchDomainEncryptAtRest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions"></a>

```typescript
public putLogPublishingOptions(value: IResolvable | ElasticsearchDomainLogPublishingOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]

---

##### `putNodeToNodeEncryption` <a name="putNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption"></a>

```typescript
public putNodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---

##### `putSnapshotOptions` <a name="putSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions"></a>

```typescript
public putSnapshotOptions(value: ElasticsearchDomainSnapshotOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticsearchDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions"></a>

```typescript
public putVpcOptions(value: ElasticsearchDomainVpcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---

##### `resetAccessPolicies` <a name="resetAccessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies"></a>

```typescript
public resetAccessPolicies(): void
```

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions"></a>

```typescript
public resetAdvancedOptions(): void
```

##### `resetAdvancedSecurityOptions` <a name="resetAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions"></a>

```typescript
public resetAdvancedSecurityOptions(): void
```

##### `resetAutoTuneOptions` <a name="resetAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions"></a>

```typescript
public resetAutoTuneOptions(): void
```

##### `resetClusterConfig` <a name="resetClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig"></a>

```typescript
public resetClusterConfig(): void
```

##### `resetCognitoOptions` <a name="resetCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions"></a>

```typescript
public resetCognitoOptions(): void
```

##### `resetDomainEndpointOptions` <a name="resetDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions"></a>

```typescript
public resetDomainEndpointOptions(): void
```

##### `resetEbsOptions` <a name="resetEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions"></a>

```typescript
public resetEbsOptions(): void
```

##### `resetElasticsearchVersion` <a name="resetElasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion"></a>

```typescript
public resetElasticsearchVersion(): void
```

##### `resetEncryptAtRest` <a name="resetEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest"></a>

```typescript
public resetEncryptAtRest(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions"></a>

```typescript
public resetLogPublishingOptions(): void
```

##### `resetNodeToNodeEncryption` <a name="resetNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption"></a>

```typescript
public resetNodeToNodeEncryption(): void
```

##### `resetSnapshotOptions` <a name="resetSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions"></a>

```typescript
public resetSnapshotOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions"></a>

```typescript
public resetVpcOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

elasticsearchDomain.ElasticsearchDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

elasticsearchDomain.ElasticsearchDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

elasticsearchDomain.ElasticsearchDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint">kibanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput">accessPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput">advancedSecurityOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput">autoTuneOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput">clusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput">cognitoOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput">domainEndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput">ebsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput">elasticsearchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput">encryptAtRestInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput">nodeToNodeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput">snapshotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion">elasticsearchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: ElasticsearchDomainAdvancedSecurityOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: ElasticsearchDomainAutoTuneOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: ElasticsearchDomainClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: ElasticsearchDomainCognitoOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a>

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions"></a>

```typescript
public readonly domainEndpointOptions: ElasticsearchDomainDomainEndpointOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: ElasticsearchDomainEbsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a>

---

##### `encryptAtRest`<sup>Required</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest"></a>

```typescript
public readonly encryptAtRest: ElasticsearchDomainEncryptAtRestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kibanaEndpoint`<sup>Required</sup> <a name="kibanaEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint"></a>

```typescript
public readonly kibanaEndpoint: string;
```

- *Type:* string

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: ElasticsearchDomainLogPublishingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: ElasticsearchDomainNodeToNodeEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: ElasticsearchDomainSnapshotOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: ElasticsearchDomainVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a>

---

##### `accessPoliciesInput`<sup>Optional</sup> <a name="accessPoliciesInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput"></a>

```typescript
public readonly accessPoliciesInput: string;
```

- *Type:* string

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput"></a>

```typescript
public readonly advancedOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `advancedSecurityOptionsInput`<sup>Optional</sup> <a name="advancedSecurityOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput"></a>

```typescript
public readonly advancedSecurityOptionsInput: ElasticsearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---

##### `autoTuneOptionsInput`<sup>Optional</sup> <a name="autoTuneOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput"></a>

```typescript
public readonly autoTuneOptionsInput: ElasticsearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput"></a>

```typescript
public readonly clusterConfigInput: ElasticsearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---

##### `cognitoOptionsInput`<sup>Optional</sup> <a name="cognitoOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput"></a>

```typescript
public readonly cognitoOptionsInput: ElasticsearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---

##### `domainEndpointOptionsInput`<sup>Optional</sup> <a name="domainEndpointOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput"></a>

```typescript
public readonly domainEndpointOptionsInput: ElasticsearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `ebsOptionsInput`<sup>Optional</sup> <a name="ebsOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput"></a>

```typescript
public readonly ebsOptionsInput: ElasticsearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---

##### `elasticsearchVersionInput`<sup>Optional</sup> <a name="elasticsearchVersionInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput"></a>

```typescript
public readonly elasticsearchVersionInput: string;
```

- *Type:* string

---

##### `encryptAtRestInput`<sup>Optional</sup> <a name="encryptAtRestInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput"></a>

```typescript
public readonly encryptAtRestInput: ElasticsearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput"></a>

```typescript
public readonly logPublishingOptionsInput: IResolvable | ElasticsearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]

---

##### `nodeToNodeEncryptionInput`<sup>Optional</sup> <a name="nodeToNodeEncryptionInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput"></a>

```typescript
public readonly nodeToNodeEncryptionInput: ElasticsearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---

##### `snapshotOptionsInput`<sup>Optional</sup> <a name="snapshotOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput"></a>

```typescript
public readonly snapshotOptionsInput: ElasticsearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ElasticsearchDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a> | cdktf.IResolvable

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput"></a>

```typescript
public readonly vpcOptionsInput: ElasticsearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="elasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion"></a>

```typescript
public readonly elasticsearchVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainAdvancedSecurityOptions <a name="ElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainAdvancedSecurityOptions: elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}.

---

##### `masterUserOptions`<sup>Optional</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```typescript
public readonly masterUserOptions: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_options ElasticsearchDomain#master_user_options}

---

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainAdvancedSecurityOptionsMasterUserOptions: elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">masterUserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">masterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}. |

---

##### `masterUserArn`<sup>Optional</sup> <a name="masterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```typescript
public readonly masterUserArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}.

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}.

---

### ElasticsearchDomainAutoTuneOptions <a name="ElasticsearchDomainAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainAutoTuneOptions: elasticsearchDomain.ElasticsearchDomainAutoTuneOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}. |

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}.

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: IResolvable | ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#maintenance_schedule ElasticsearchDomain#maintenance_schedule}

---

##### `rollbackOnDisable`<sup>Optional</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainAutoTuneOptionsMaintenanceSchedule: elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">startAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}. |

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```typescript
public readonly duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#duration ElasticsearchDomain#duration}

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration: elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}.

---

### ElasticsearchDomainClusterConfig <a name="ElasticsearchDomainClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainClusterConfig: elasticsearchDomain.ElasticsearchDomainClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount">warmCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled">warmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType">warmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}. |

---

##### `coldStorageOptions`<sup>Optional</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions"></a>

```typescript
public readonly coldStorageOptions: ElasticsearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cold_storage_options ElasticsearchDomain#cold_storage_options}

---

##### `dedicatedMasterCount`<sup>Optional</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}.

---

##### `dedicatedMasterEnabled`<sup>Optional</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}.

---

##### `dedicatedMasterType`<sup>Optional</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}.

---

##### `warmCount`<sup>Optional</sup> <a name="warmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}.

---

##### `warmEnabled`<sup>Optional</sup> <a name="warmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}.

---

##### `warmType`<sup>Optional</sup> <a name="warmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}.

---

##### `zoneAwarenessConfig`<sup>Optional</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_config ElasticsearchDomain#zone_awareness_config}

---

##### `zoneAwarenessEnabled`<sup>Optional</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}.

---

### ElasticsearchDomainClusterConfigColdStorageOptions <a name="ElasticsearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainClusterConfigColdStorageOptions: elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainClusterConfigZoneAwarenessConfig: elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}. |

---

##### `availabilityZoneCount`<sup>Optional</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}.

---

### ElasticsearchDomainCognitoOptions <a name="ElasticsearchDomainCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainCognitoOptions: elasticsearchDomain.ElasticsearchDomainCognitoOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainConfig <a name="ElasticsearchDomainConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainConfig: elasticsearchDomain.ElasticsearchDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions">advancedOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion">elasticsearchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}.

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: ElasticsearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_security_options ElasticsearchDomain#advanced_security_options}

---

##### `autoTuneOptions`<sup>Optional</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: ElasticsearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#auto_tune_options ElasticsearchDomain#auto_tune_options}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: ElasticsearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cluster_config ElasticsearchDomain#cluster_config}

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: ElasticsearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cognito_options ElasticsearchDomain#cognito_options}

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions"></a>

```typescript
public readonly domainEndpointOptions: ElasticsearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: ElasticsearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_options ElasticsearchDomain#ebs_options}

---

##### `elasticsearchVersion`<sup>Optional</sup> <a name="elasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion"></a>

```typescript
public readonly elasticsearchVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}.

---

##### `encryptAtRest`<sup>Optional</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest"></a>

```typescript
public readonly encryptAtRest: ElasticsearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: IResolvable | ElasticsearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_publishing_options ElasticsearchDomain#log_publishing_options}

---

##### `nodeToNodeEncryption`<sup>Optional</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: ElasticsearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: ElasticsearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#snapshot_options ElasticsearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#timeouts ElasticsearchDomain#timeouts}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: ElasticsearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#vpc_options ElasticsearchDomain#vpc_options}

---

### ElasticsearchDomainDomainEndpointOptions <a name="ElasticsearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainDomainEndpointOptions: elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint">customEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}. |

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}.

---

##### `customEndpointCertificateArn`<sup>Optional</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```typescript
public readonly customEndpointCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}.

---

##### `customEndpointEnabled`<sup>Optional</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```typescript
public readonly customEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}.

---

##### `enforceHttps`<sup>Optional</sup> <a name="enforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}.

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}.

---

### ElasticsearchDomainEbsOptions <a name="ElasticsearchDomainEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainEbsOptions: elasticsearchDomain.ElasticsearchDomainEbsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled">ebsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}. |

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}.

---

### ElasticsearchDomainEncryptAtRest <a name="ElasticsearchDomainEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainEncryptAtRest: elasticsearchDomain.ElasticsearchDomainEncryptAtRest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}.

---

### ElasticsearchDomainLogPublishingOptions <a name="ElasticsearchDomainLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainLogPublishingOptions: elasticsearchDomain.ElasticsearchDomainLogPublishingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainNodeToNodeEncryption <a name="ElasticsearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainNodeToNodeEncryption: elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainSnapshotOptions <a name="ElasticsearchDomainSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainSnapshotOptions: elasticsearchDomain.ElasticsearchDomainSnapshotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}. |

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}.

---

### ElasticsearchDomainTimeouts <a name="ElasticsearchDomainTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainTimeouts: elasticsearchDomain.ElasticsearchDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}.

---

### ElasticsearchDomainVpcOptions <a name="ElasticsearchDomainVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

const elasticsearchDomainVpcOptions: elasticsearchDomain.ElasticsearchDomainVpcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">resetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMasterUserArn` <a name="resetMasterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```typescript
public resetMasterUserArn(): void
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```typescript
public resetMasterUserName(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">masterUserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">masterUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterUserArnInput`<sup>Optional</sup> <a name="masterUserArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```typescript
public readonly masterUserArnInput: string;
```

- *Type:* string

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```typescript
public readonly masterUserNameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `masterUserArn`<sup>Required</sup> <a name="masterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```typescript
public readonly masterUserArn: string;
```

- *Type:* string

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### ElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">putMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">resetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">resetMasterUserOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMasterUserOptions` <a name="putMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```typescript
public putMasterUserOptions(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `resetInternalUserDatabaseEnabled` <a name="resetInternalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```typescript
public resetInternalUserDatabaseEnabled(): void
```

##### `resetMasterUserOptions` <a name="resetMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```typescript
public resetMasterUserOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internalUserDatabaseEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">masterUserOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterUserOptions`<sup>Required</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```typescript
public readonly masterUserOptions: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="internalUserDatabaseEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```typescript
public readonly internalUserDatabaseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterUserOptionsInput`<sup>Optional</sup> <a name="masterUserOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```typescript
public readonly masterUserOptionsInput: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">putDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```typescript
public putDuration(value: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">cronExpressionForRecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">startAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `cronExpressionForRecurrenceInput`<sup>Optional</sup> <a name="cronExpressionForRecurrenceInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```typescript
public readonly cronExpressionForRecurrenceInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `startAtInput`<sup>Optional</sup> <a name="startAtInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```typescript
public readonly startAtInput: string;
```

- *Type:* string

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a> | cdktf.IResolvable

---


### ElasticsearchDomainAutoTuneOptionsOutputReference <a name="ElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">resetRollbackOnDisable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```typescript
public putMaintenanceSchedule(value: IResolvable | ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```typescript
public resetMaintenanceSchedule(): void
```

##### `resetRollbackOnDisable` <a name="resetRollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```typescript
public resetRollbackOnDisable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">rollbackOnDisableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```typescript
public readonly maintenanceScheduleInput: IResolvable | ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---

##### `rollbackOnDisableInput`<sup>Optional</sup> <a name="rollbackOnDisableInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```typescript
public readonly rollbackOnDisableInput: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---


### ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference <a name="ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---


### ElasticsearchDomainClusterConfigOutputReference <a name="ElasticsearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions">putColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">putZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions">resetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">resetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">resetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType">resetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount">resetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled">resetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType">resetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">resetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">resetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColdStorageOptions` <a name="putColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```typescript
public putColdStorageOptions(value: ElasticsearchDomainClusterConfigColdStorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---

##### `putZoneAwarenessConfig` <a name="putZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```typescript
public putZoneAwarenessConfig(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `resetColdStorageOptions` <a name="resetColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```typescript
public resetColdStorageOptions(): void
```

##### `resetDedicatedMasterCount` <a name="resetDedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```typescript
public resetDedicatedMasterCount(): void
```

##### `resetDedicatedMasterEnabled` <a name="resetDedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```typescript
public resetDedicatedMasterEnabled(): void
```

##### `resetDedicatedMasterType` <a name="resetDedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```typescript
public resetDedicatedMasterType(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetWarmCount` <a name="resetWarmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```typescript
public resetWarmCount(): void
```

##### `resetWarmEnabled` <a name="resetWarmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```typescript
public resetWarmEnabled(): void
```

##### `resetWarmType` <a name="resetWarmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType"></a>

```typescript
public resetWarmType(): void
```

##### `resetZoneAwarenessConfig` <a name="resetZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```typescript
public resetZoneAwarenessConfig(): void
```

##### `resetZoneAwarenessEnabled` <a name="resetZoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```typescript
public resetZoneAwarenessEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">coldStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicatedMasterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicatedMasterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicatedMasterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput">warmCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput">warmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput">warmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zoneAwarenessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zoneAwarenessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```typescript
public readonly coldStorageOptions: ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `coldStorageOptionsInput`<sup>Optional</sup> <a name="coldStorageOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```typescript
public readonly coldStorageOptionsInput: ElasticsearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---

##### `dedicatedMasterCountInput`<sup>Optional</sup> <a name="dedicatedMasterCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```typescript
public readonly dedicatedMasterCountInput: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabledInput`<sup>Optional</sup> <a name="dedicatedMasterEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```typescript
public readonly dedicatedMasterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterTypeInput`<sup>Optional</sup> <a name="dedicatedMasterTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```typescript
public readonly dedicatedMasterTypeInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `warmCountInput`<sup>Optional</sup> <a name="warmCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```typescript
public readonly warmCountInput: number;
```

- *Type:* number

---

##### `warmEnabledInput`<sup>Optional</sup> <a name="warmEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```typescript
public readonly warmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warmTypeInput`<sup>Optional</sup> <a name="warmTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```typescript
public readonly warmTypeInput: string;
```

- *Type:* string

---

##### `zoneAwarenessConfigInput`<sup>Optional</sup> <a name="zoneAwarenessConfigInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```typescript
public readonly zoneAwarenessConfigInput: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zoneAwarenessEnabledInput`<sup>Optional</sup> <a name="zoneAwarenessEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```typescript
public readonly zoneAwarenessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---


### ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">resetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneCount` <a name="resetAvailabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```typescript
public resetAvailabilityZoneCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availabilityZoneCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneCountInput`<sup>Optional</sup> <a name="availabilityZoneCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```typescript
public readonly availabilityZoneCountInput: number;
```

- *Type:* number

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### ElasticsearchDomainCognitoOptionsOutputReference <a name="ElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---


### ElasticsearchDomainDomainEndpointOptionsOutputReference <a name="ElasticsearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">resetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">resetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">resetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">resetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```typescript
public resetCustomEndpoint(): void
```

##### `resetCustomEndpointCertificateArn` <a name="resetCustomEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```typescript
public resetCustomEndpointCertificateArn(): void
```

##### `resetCustomEndpointEnabled` <a name="resetCustomEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```typescript
public resetCustomEndpointEnabled(): void
```

##### `resetEnforceHttps` <a name="resetEnforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```typescript
public resetEnforceHttps(): void
```

##### `resetTlsSecurityPolicy` <a name="resetTlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```typescript
public resetTlsSecurityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">customEndpointCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">customEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforceHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">customEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEndpointCertificateArnInput`<sup>Optional</sup> <a name="customEndpointCertificateArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```typescript
public readonly customEndpointCertificateArnInput: string;
```

- *Type:* string

---

##### `customEndpointEnabledInput`<sup>Optional</sup> <a name="customEndpointEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```typescript
public readonly customEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```typescript
public readonly customEndpointInput: string;
```

- *Type:* string

---

##### `enforceHttpsInput`<sup>Optional</sup> <a name="enforceHttpsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```typescript
public readonly enforceHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicyInput`<sup>Optional</sup> <a name="tlsSecurityPolicyInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```typescript
public readonly tlsSecurityPolicyInput: string;
```

- *Type:* string

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: string;
```

- *Type:* string

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```typescript
public readonly customEndpointCertificateArn: string;
```

- *Type:* string

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```typescript
public readonly customEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceHttps`<sup>Required</sup> <a name="enforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---


### ElasticsearchDomainEbsOptionsOutputReference <a name="ElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsEnabledInput`<sup>Optional</sup> <a name="ebsEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```typescript
public readonly ebsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---


### ElasticsearchDomainEncryptAtRestOutputReference <a name="ElasticsearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---


### ElasticsearchDomainLogPublishingOptionsList <a name="ElasticsearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get"></a>

```typescript
public get(index: number): ElasticsearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticsearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>[]

---


### ElasticsearchDomainLogPublishingOptionsOutputReference <a name="ElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainLogPublishingOptions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a> | cdktf.IResolvable

---


### ElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="ElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---


### ElasticsearchDomainSnapshotOptionsOutputReference <a name="ElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automatedSnapshotStartHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatedSnapshotStartHourInput`<sup>Optional</sup> <a name="automatedSnapshotStartHourInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```typescript
public readonly automatedSnapshotStartHourInput: number;
```

- *Type:* number

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---


### ElasticsearchDomainTimeoutsOutputReference <a name="ElasticsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a> | cdktf.IResolvable

---


### ElasticsearchDomainVpcOptionsOutputReference <a name="ElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomain } from '@cdktf/provider-aws'

new elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---



