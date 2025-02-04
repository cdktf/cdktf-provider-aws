# `cognitoManagedUserPoolClient` Submodule <a name="`cognitoManagedUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoManagedUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedUserPoolClient <a name="CognitoManagedUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

new cognitoManagedUserPoolClient.CognitoManagedUserPoolClient(scope: Construct, id: string, config: CognitoManagedUserPoolClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration">putAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits">putTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity">resetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows">resetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient">resetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes">resetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration">resetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity">resetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls">resetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri">resetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData">resetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation">resetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows">resetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity">resetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls">resetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern">resetNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors">resetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes">resetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity">resetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders">resetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits">resetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes">resetWriteAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsConfiguration` <a name="putAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration"></a>

```typescript
public putAnalyticsConfiguration(value: IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]

---

##### `putTokenValidityUnits` <a name="putTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits"></a>

```typescript
public putTokenValidityUnits(value: IResolvable | CognitoManagedUserPoolClientTokenValidityUnits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]

---

##### `resetAccessTokenValidity` <a name="resetAccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity"></a>

```typescript
public resetAccessTokenValidity(): void
```

##### `resetAllowedOauthFlows` <a name="resetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows"></a>

```typescript
public resetAllowedOauthFlows(): void
```

##### `resetAllowedOauthFlowsUserPoolClient` <a name="resetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```typescript
public resetAllowedOauthFlowsUserPoolClient(): void
```

##### `resetAllowedOauthScopes` <a name="resetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes"></a>

```typescript
public resetAllowedOauthScopes(): void
```

##### `resetAnalyticsConfiguration` <a name="resetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration"></a>

```typescript
public resetAnalyticsConfiguration(): void
```

##### `resetAuthSessionValidity` <a name="resetAuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity"></a>

```typescript
public resetAuthSessionValidity(): void
```

##### `resetCallbackUrls` <a name="resetCallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls"></a>

```typescript
public resetCallbackUrls(): void
```

##### `resetDefaultRedirectUri` <a name="resetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri"></a>

```typescript
public resetDefaultRedirectUri(): void
```

##### `resetEnablePropagateAdditionalUserContextData` <a name="resetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```typescript
public resetEnablePropagateAdditionalUserContextData(): void
```

##### `resetEnableTokenRevocation` <a name="resetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation"></a>

```typescript
public resetEnableTokenRevocation(): void
```

##### `resetExplicitAuthFlows` <a name="resetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows"></a>

```typescript
public resetExplicitAuthFlows(): void
```

##### `resetIdTokenValidity` <a name="resetIdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity"></a>

```typescript
public resetIdTokenValidity(): void
```

##### `resetLogoutUrls` <a name="resetLogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls"></a>

```typescript
public resetLogoutUrls(): void
```

##### `resetNamePattern` <a name="resetNamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern"></a>

```typescript
public resetNamePattern(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPreventUserExistenceErrors` <a name="resetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors"></a>

```typescript
public resetPreventUserExistenceErrors(): void
```

##### `resetReadAttributes` <a name="resetReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes"></a>

```typescript
public resetReadAttributes(): void
```

##### `resetRefreshTokenValidity` <a name="resetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity"></a>

```typescript
public resetRefreshTokenValidity(): void
```

##### `resetSupportedIdentityProviders` <a name="resetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders"></a>

```typescript
public resetSupportedIdentityProviders(): void
```

##### `resetTokenValidityUnits` <a name="resetTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits"></a>

```typescript
public resetTokenValidityUnits(): void
```

##### `resetWriteAttributes` <a name="resetWriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes"></a>

```typescript
public resetWriteAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoManagedUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoManagedUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput">accessTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput">allowedOauthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">allowedOauthFlowsUserPoolClientInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput">allowedOauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput">analyticsConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput">authSessionValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput">callbackUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput">defaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">enablePropagateAdditionalUserContextDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput">enableTokenRevocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput">explicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput">idTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput">logoutUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput">namePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput">preventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput">readAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput">refreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput">supportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput">tokenValidityUnitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput">writeAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity">authSessionValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls">callbackUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls">logoutUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern">namePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: CognitoManagedUserPoolClientAnalyticsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: CognitoManagedUserPoolClientTokenValidityUnitsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a>

---

##### `accessTokenValidityInput`<sup>Optional</sup> <a name="accessTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput"></a>

```typescript
public readonly accessTokenValidityInput: number;
```

- *Type:* number

---

##### `allowedOauthFlowsInput`<sup>Optional</sup> <a name="allowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput"></a>

```typescript
public readonly allowedOauthFlowsInput: string[];
```

- *Type:* string[]

---

##### `allowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOauthScopesInput`<sup>Optional</sup> <a name="allowedOauthScopesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput"></a>

```typescript
public readonly allowedOauthScopesInput: string[];
```

- *Type:* string[]

---

##### `analyticsConfigurationInput`<sup>Optional</sup> <a name="analyticsConfigurationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput"></a>

```typescript
public readonly analyticsConfigurationInput: IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]

---

##### `authSessionValidityInput`<sup>Optional</sup> <a name="authSessionValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput"></a>

```typescript
public readonly authSessionValidityInput: number;
```

- *Type:* number

---

##### `callbackUrlsInput`<sup>Optional</sup> <a name="callbackUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput"></a>

```typescript
public readonly callbackUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultRedirectUriInput`<sup>Optional</sup> <a name="defaultRedirectUriInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput"></a>

```typescript
public readonly defaultRedirectUriInput: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```typescript
public readonly enablePropagateAdditionalUserContextDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTokenRevocationInput`<sup>Optional</sup> <a name="enableTokenRevocationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput"></a>

```typescript
public readonly enableTokenRevocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `explicitAuthFlowsInput`<sup>Optional</sup> <a name="explicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput"></a>

```typescript
public readonly explicitAuthFlowsInput: string[];
```

- *Type:* string[]

---

##### `idTokenValidityInput`<sup>Optional</sup> <a name="idTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput"></a>

```typescript
public readonly idTokenValidityInput: number;
```

- *Type:* number

---

##### `logoutUrlsInput`<sup>Optional</sup> <a name="logoutUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput"></a>

```typescript
public readonly logoutUrlsInput: string[];
```

- *Type:* string[]

---

##### `namePatternInput`<sup>Optional</sup> <a name="namePatternInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput"></a>

```typescript
public readonly namePatternInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `preventUserExistenceErrorsInput`<sup>Optional</sup> <a name="preventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```typescript
public readonly preventUserExistenceErrorsInput: string;
```

- *Type:* string

---

##### `readAttributesInput`<sup>Optional</sup> <a name="readAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput"></a>

```typescript
public readonly readAttributesInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidityInput`<sup>Optional</sup> <a name="refreshTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput"></a>

```typescript
public readonly refreshTokenValidityInput: number;
```

- *Type:* number

---

##### `supportedIdentityProvidersInput`<sup>Optional</sup> <a name="supportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput"></a>

```typescript
public readonly supportedIdentityProvidersInput: string[];
```

- *Type:* string[]

---

##### `tokenValidityUnitsInput`<sup>Optional</sup> <a name="tokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput"></a>

```typescript
public readonly tokenValidityUnitsInput: IResolvable | CognitoManagedUserPoolClientTokenValidityUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `writeAttributesInput`<sup>Optional</sup> <a name="writeAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput"></a>

```typescript
public readonly writeAttributesInput: string[];
```

- *Type:* string[]

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

---

##### `allowedOauthFlows`<sup>Required</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows"></a>

```typescript
public readonly allowedOauthFlows: string[];
```

- *Type:* string[]

---

##### `allowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOauthScopes`<sup>Required</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes"></a>

```typescript
public readonly allowedOauthScopes: string[];
```

- *Type:* string[]

---

##### `authSessionValidity`<sup>Required</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity"></a>

```typescript
public readonly authSessionValidity: number;
```

- *Type:* number

---

##### `callbackUrls`<sup>Required</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls"></a>

```typescript
public readonly callbackUrls: string[];
```

- *Type:* string[]

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

---

##### `logoutUrls`<sup>Required</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls"></a>

```typescript
public readonly logoutUrls: string[];
```

- *Type:* string[]

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedUserPoolClientAnalyticsConfiguration <a name="CognitoManagedUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

const cognitoManagedUserPoolClientAnalyticsConfiguration: cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}.

---

##### `userDataShared`<sup>Optional</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}.

---

### CognitoManagedUserPoolClientConfig <a name="CognitoManagedUserPoolClientConfig" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

const cognitoManagedUserPoolClientConfig: cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity">authSessionValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls">callbackUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls">logoutUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern">namePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows"></a>

```typescript
public readonly allowedOauthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes"></a>

```typescript
public readonly allowedOauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity"></a>

```typescript
public readonly authSessionValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls"></a>

```typescript
public readonly callbackUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls"></a>

```typescript
public readonly logoutUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `namePattern`<sup>Optional</sup> <a name="namePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: IResolvable | CognitoManagedUserPoolClientTokenValidityUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

### CognitoManagedUserPoolClientTokenValidityUnits <a name="CognitoManagedUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

const cognitoManagedUserPoolClientTokenValidityUnits: cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken">idToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken">refreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedUserPoolClientAnalyticsConfigurationList <a name="CognitoManagedUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

new cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get"></a>

```typescript
public get(index: number): CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>[]

---


### CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

new cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">resetUserDataShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```typescript
public resetApplicationArn(): void
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetUserDataShared` <a name="resetUserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```typescript
public resetUserDataShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">userDataSharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `userDataSharedInput`<sup>Optional</sup> <a name="userDataSharedInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```typescript
public readonly userDataSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>

---


### CognitoManagedUserPoolClientTokenValidityUnitsList <a name="CognitoManagedUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

new cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get"></a>

```typescript
public get(index: number): CognitoManagedUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedUserPoolClientTokenValidityUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>[]

---


### CognitoManagedUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoManagedUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```typescript
import { cognitoManagedUserPoolClient } from '@cdktf/provider-aws'

new cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```typescript
public resetIdToken(): void
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```typescript
public resetRefreshToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: string;
```

- *Type:* string

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```typescript
public readonly refreshTokenInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedUserPoolClientTokenValidityUnits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>

---



