# `appsyncGraphqlApi` Submodule <a name="`appsyncGraphqlApi` Submodule" id="@cdktf/provider-aws.appsyncGraphqlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphqlApi <a name="AppsyncGraphqlApi" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api aws_appsync_graphql_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApi(scope: Construct, id: string, config: AppsyncGraphqlApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig">AppsyncGraphqlApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig">AppsyncGraphqlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider">putAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig">putOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider">resetAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig">resetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled">resetXrayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdditionalAuthenticationProvider` <a name="putAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider"></a>

```typescript
public putAdditionalAuthenticationProvider(value: IResolvable | AppsyncGraphqlApiAdditionalAuthenticationProvider[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig"></a>

```typescript
public putLambdaAuthorizerConfig(value: AppsyncGraphqlApiLambdaAuthorizerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig"></a>

```typescript
public putLogConfig(value: AppsyncGraphqlApiLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `putOpenidConnectConfig` <a name="putOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig"></a>

```typescript
public putOpenidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig"></a>

```typescript
public putUserPoolConfig(value: AppsyncGraphqlApiUserPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `resetAdditionalAuthenticationProvider` <a name="resetAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider"></a>

```typescript
public resetAdditionalAuthenticationProvider(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig"></a>

```typescript
public resetLambdaAuthorizerConfig(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetOpenidConnectConfig` <a name="resetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig"></a>

```typescript
public resetOpenidConnectConfig(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig"></a>

```typescript
public resetUserPoolConfig(): void
```

##### `resetXrayEnabled` <a name="resetXrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled"></a>

```typescript
public resetXrayEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider">additionalAuthenticationProvider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris">uris</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput">additionalAuthenticationProviderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput">openidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput">xrayEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled">xrayEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalAuthenticationProvider`<sup>Required</sup> <a name="additionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider"></a>

```typescript
public readonly additionalAuthenticationProvider: AppsyncGraphqlApiAdditionalAuthenticationProviderList;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig"></a>

```typescript
public readonly logConfig: AppsyncGraphqlApiLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a>

---

##### `openidConnectConfig`<sup>Required</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig"></a>

```typescript
public readonly openidConnectConfig: AppsyncGraphqlApiOpenidConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris"></a>

```typescript
public readonly uris: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphqlApiUserPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a>

---

##### `additionalAuthenticationProviderInput`<sup>Optional</sup> <a name="additionalAuthenticationProviderInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput"></a>

```typescript
public readonly additionalAuthenticationProviderInput: IResolvable | AppsyncGraphqlApiAdditionalAuthenticationProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput"></a>

```typescript
public readonly lambdaAuthorizerConfigInput: AppsyncGraphqlApiLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: AppsyncGraphqlApiLogConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openidConnectConfigInput`<sup>Optional</sup> <a name="openidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput"></a>

```typescript
public readonly openidConnectConfigInput: AppsyncGraphqlApiOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput"></a>

```typescript
public readonly userPoolConfigInput: AppsyncGraphqlApiUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `xrayEnabledInput`<sup>Optional</sup> <a name="xrayEnabledInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput"></a>

```typescript
public readonly xrayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xrayEnabled`<sup>Required</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled"></a>

```typescript
public readonly xrayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProvider <a name="AppsyncGraphqlApiAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiAdditionalAuthenticationProvider: appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | user_pool_config block. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig"></a>

```typescript
public readonly openidConnectConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig: appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig: appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl">authTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl">iatTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig: appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

### AppsyncGraphqlApiConfig <a name="AppsyncGraphqlApiConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiConfig: appsyncGraphqlApi.AppsyncGraphqlApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider">additionalAuthenticationProvider</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]</code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled">xrayEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `additionalAuthenticationProvider`<sup>Optional</sup> <a name="additionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider"></a>

```typescript
public readonly additionalAuthenticationProvider: IResolvable | AppsyncGraphqlApiAdditionalAuthenticationProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphqlApiLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig"></a>

```typescript
public readonly logConfig: AppsyncGraphqlApiLogConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig"></a>

```typescript
public readonly openidConnectConfig: AppsyncGraphqlApiOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphqlApiUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled"></a>

```typescript
public readonly xrayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

### AppsyncGraphqlApiLambdaAuthorizerConfig <a name="AppsyncGraphqlApiLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiLambdaAuthorizerConfig: appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiLogConfig <a name="AppsyncGraphqlApiLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiLogConfig: appsyncGraphqlApi.AppsyncGraphqlApiLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel">fieldLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}. |

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel"></a>

```typescript
public readonly fieldLogLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}.

---

##### `excludeVerboseContent`<sup>Optional</sup> <a name="excludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent"></a>

```typescript
public readonly excludeVerboseContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.

---

### AppsyncGraphqlApiOpenidConnectConfig <a name="AppsyncGraphqlApiOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiOpenidConnectConfig: appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl">authTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl">iatTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiUserPoolConfig <a name="AppsyncGraphqlApiUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

const appsyncGraphqlApiUserPoolConfig: appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderList <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderList" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get"></a>

```typescript
public get(index: number): AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphqlApiAdditionalAuthenticationProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>[]

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```typescript
public resetAuthTtl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```typescript
public resetIatTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```typescript
public readonly authTtlInput: number;
```

- *Type:* number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```typescript
public readonly iatTtlInput: number;
```

- *Type:* number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig">putOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig">resetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig"></a>

```typescript
public putLambdaAuthorizerConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `putOpenidConnectConfig` <a name="putOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig"></a>

```typescript
public putOpenidConnectConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig"></a>

```typescript
public putUserPoolConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```typescript
public resetLambdaAuthorizerConfig(): void
```

##### `resetOpenidConnectConfig` <a name="resetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig"></a>

```typescript
public resetOpenidConnectConfig(): void
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig"></a>

```typescript
public resetUserPoolConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput">openidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a>

---

##### `openidConnectConfig`<sup>Required</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig"></a>

```typescript
public readonly openidConnectConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```typescript
public readonly lambdaAuthorizerConfigInput: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `openidConnectConfigInput`<sup>Optional</sup> <a name="openidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput"></a>

```typescript
public readonly openidConnectConfigInput: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput"></a>

```typescript
public readonly userPoolConfigInput: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiAdditionalAuthenticationProvider | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a> | cdktf.IResolvable

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```typescript
public resetAppIdClientRegex(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```typescript
public readonly appIdClientRegexInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---


### AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiLogConfigOutputReference <a name="AppsyncGraphqlApiLogConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent">resetExcludeVerboseContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeVerboseContent` <a name="resetExcludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```typescript
public resetExcludeVerboseContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput">excludeVerboseContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput">fieldLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel">fieldLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```typescript
public readonly cloudwatchLogsRoleArnInput: string;
```

- *Type:* string

---

##### `excludeVerboseContentInput`<sup>Optional</sup> <a name="excludeVerboseContentInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```typescript
public readonly excludeVerboseContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldLogLevelInput`<sup>Optional</sup> <a name="fieldLogLevelInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```typescript
public readonly fieldLogLevelInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="excludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```typescript
public readonly excludeVerboseContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```typescript
public readonly fieldLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiLogConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---


### AppsyncGraphqlApiOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```typescript
public resetAuthTtl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl"></a>

```typescript
public resetIatTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```typescript
public readonly authTtlInput: number;
```

- *Type:* number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```typescript
public readonly iatTtlInput: number;
```

- *Type:* number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiOpenidConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---


### AppsyncGraphqlApiUserPoolConfigOutputReference <a name="AppsyncGraphqlApiUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphqlApi } from '@cdktf/provider-aws'

new appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```typescript
public resetAppIdClientRegex(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```typescript
public readonly appIdClientRegexInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncGraphqlApiUserPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---



