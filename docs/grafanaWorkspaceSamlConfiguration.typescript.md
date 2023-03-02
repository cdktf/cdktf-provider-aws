# `grafanaWorkspaceSamlConfiguration` Submodule <a name="`grafanaWorkspaceSamlConfiguration` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

new grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration(scope: Construct, id: string, config: GrafanaWorkspaceSamlConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues">resetAdminRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations">resetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion">resetEmailAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion">resetGroupsAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml">resetIdpMetadataXml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion">resetLoginAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration">resetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion">resetNameAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion">resetOrgAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion">resetRoleAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: GrafanaWorkspaceSamlConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

---

##### `resetAdminRoleValues` <a name="resetAdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues"></a>

```typescript
public resetAdminRoleValues(): void
```

##### `resetAllowedOrganizations` <a name="resetAllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations"></a>

```typescript
public resetAllowedOrganizations(): void
```

##### `resetEmailAssertion` <a name="resetEmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion"></a>

```typescript
public resetEmailAssertion(): void
```

##### `resetGroupsAssertion` <a name="resetGroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion"></a>

```typescript
public resetGroupsAssertion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl"></a>

```typescript
public resetIdpMetadataUrl(): void
```

##### `resetIdpMetadataXml` <a name="resetIdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml"></a>

```typescript
public resetIdpMetadataXml(): void
```

##### `resetLoginAssertion` <a name="resetLoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion"></a>

```typescript
public resetLoginAssertion(): void
```

##### `resetLoginValidityDuration` <a name="resetLoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration"></a>

```typescript
public resetLoginValidityDuration(): void
```

##### `resetNameAssertion` <a name="resetNameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion"></a>

```typescript
public resetNameAssertion(): void
```

##### `resetOrgAssertion` <a name="resetOrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion"></a>

```typescript
public resetOrgAssertion(): void
```

##### `resetRoleAssertion` <a name="resetRoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion"></a>

```typescript
public resetRoleAssertion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput">adminRoleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput">allowedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput">editorRoleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput">emailAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput">groupsAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput">loginAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput">loginValidityDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput">nameAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput">orgAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput">roleAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues">adminRoleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues">editorRoleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion">emailAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion">groupsAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion">loginAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion">nameAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion">orgAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion">roleAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a>

---

##### `adminRoleValuesInput`<sup>Optional</sup> <a name="adminRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput"></a>

```typescript
public readonly adminRoleValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedOrganizationsInput`<sup>Optional</sup> <a name="allowedOrganizationsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput"></a>

```typescript
public readonly allowedOrganizationsInput: string[];
```

- *Type:* string[]

---

##### `editorRoleValuesInput`<sup>Optional</sup> <a name="editorRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput"></a>

```typescript
public readonly editorRoleValuesInput: string[];
```

- *Type:* string[]

---

##### `emailAssertionInput`<sup>Optional</sup> <a name="emailAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput"></a>

```typescript
public readonly emailAssertionInput: string;
```

- *Type:* string

---

##### `groupsAssertionInput`<sup>Optional</sup> <a name="groupsAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput"></a>

```typescript
public readonly groupsAssertionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput"></a>

```typescript
public readonly idpMetadataUrlInput: string;
```

- *Type:* string

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput"></a>

```typescript
public readonly idpMetadataXmlInput: string;
```

- *Type:* string

---

##### `loginAssertionInput`<sup>Optional</sup> <a name="loginAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput"></a>

```typescript
public readonly loginAssertionInput: string;
```

- *Type:* string

---

##### `loginValidityDurationInput`<sup>Optional</sup> <a name="loginValidityDurationInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput"></a>

```typescript
public readonly loginValidityDurationInput: number;
```

- *Type:* number

---

##### `nameAssertionInput`<sup>Optional</sup> <a name="nameAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput"></a>

```typescript
public readonly nameAssertionInput: string;
```

- *Type:* string

---

##### `orgAssertionInput`<sup>Optional</sup> <a name="orgAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput"></a>

```typescript
public readonly orgAssertionInput: string;
```

- *Type:* string

---

##### `roleAssertionInput`<sup>Optional</sup> <a name="roleAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput"></a>

```typescript
public readonly roleAssertionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GrafanaWorkspaceSamlConfigurationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> | cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `adminRoleValues`<sup>Required</sup> <a name="adminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues"></a>

```typescript
public readonly adminRoleValues: string[];
```

- *Type:* string[]

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

---

##### `editorRoleValues`<sup>Required</sup> <a name="editorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues"></a>

```typescript
public readonly editorRoleValues: string[];
```

- *Type:* string[]

---

##### `emailAssertion`<sup>Required</sup> <a name="emailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion"></a>

```typescript
public readonly emailAssertion: string;
```

- *Type:* string

---

##### `groupsAssertion`<sup>Required</sup> <a name="groupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion"></a>

```typescript
public readonly groupsAssertion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

---

##### `loginAssertion`<sup>Required</sup> <a name="loginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion"></a>

```typescript
public readonly loginAssertion: string;
```

- *Type:* string

---

##### `loginValidityDuration`<sup>Required</sup> <a name="loginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

---

##### `nameAssertion`<sup>Required</sup> <a name="nameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion"></a>

```typescript
public readonly nameAssertion: string;
```

- *Type:* string

---

##### `orgAssertion`<sup>Required</sup> <a name="orgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion"></a>

```typescript
public readonly orgAssertion: string;
```

- *Type:* string

---

##### `roleAssertion`<sup>Required</sup> <a name="roleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion"></a>

```typescript
public readonly roleAssertion: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceSamlConfigurationConfig <a name="GrafanaWorkspaceSamlConfigurationConfig" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.Initializer"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

const grafanaWorkspaceSamlConfigurationConfig: grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues">editorRoleValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues">adminRoleValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion">emailAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion">groupsAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion">loginAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion">nameAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion">orgAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion">roleAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `editorRoleValues`<sup>Required</sup> <a name="editorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues"></a>

```typescript
public readonly editorRoleValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `adminRoleValues`<sup>Optional</sup> <a name="adminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues"></a>

```typescript
public readonly adminRoleValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `emailAssertion`<sup>Optional</sup> <a name="emailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion"></a>

```typescript
public readonly emailAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `groupsAssertion`<sup>Optional</sup> <a name="groupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion"></a>

```typescript
public readonly groupsAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `idpMetadataXml`<sup>Optional</sup> <a name="idpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `loginAssertion`<sup>Optional</sup> <a name="loginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion"></a>

```typescript
public readonly loginAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `loginValidityDuration`<sup>Optional</sup> <a name="loginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `nameAssertion`<sup>Optional</sup> <a name="nameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion"></a>

```typescript
public readonly nameAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `orgAssertion`<sup>Optional</sup> <a name="orgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion"></a>

```typescript
public readonly orgAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `roleAssertion`<sup>Optional</sup> <a name="roleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion"></a>

```typescript
public readonly roleAssertion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrafanaWorkspaceSamlConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

### GrafanaWorkspaceSamlConfigurationTimeouts <a name="GrafanaWorkspaceSamlConfigurationTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.Initializer"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

const grafanaWorkspaceSamlConfigurationTimeouts: grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference <a name="GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspaceSamlConfiguration } from '@cdktf/provider-aws'

new grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrafanaWorkspaceSamlConfigurationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> | cdktf.IResolvable

---



