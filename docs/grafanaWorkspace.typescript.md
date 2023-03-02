# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktf/provider-aws.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace aws_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

new grafanaWorkspace.GrafanaWorkspace(scope: Construct, id: string, config: GrafanaWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">resetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">resetOrganizationRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">resetStackSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: GrafanaWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: GrafanaWorkspaceVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotificationDestinations` <a name="resetNotificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```typescript
public resetNotificationDestinations(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```

##### `resetOrganizationRoleName` <a name="resetOrganizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```typescript
public resetOrganizationRoleName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetStackSetName` <a name="resetStackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```typescript
public resetStackSetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

grafanaWorkspace.GrafanaWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

grafanaWorkspace.GrafanaWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

grafanaWorkspace.GrafanaWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">accountAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">authenticationProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">dataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">notificationDestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">organizationRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">permissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">stackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```typescript
public readonly samlConfigurationStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: GrafanaWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GrafanaWorkspaceVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `accountAccessTypeInput`<sup>Optional</sup> <a name="accountAccessTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```typescript
public readonly accountAccessTypeInput: string;
```

- *Type:* string

---

##### `authenticationProvidersInput`<sup>Optional</sup> <a name="authenticationProvidersInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```typescript
public readonly authenticationProvidersInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationDestinationsInput`<sup>Optional</sup> <a name="notificationDestinationsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```typescript
public readonly notificationDestinationsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `organizationRoleNameInput`<sup>Optional</sup> <a name="organizationRoleNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```typescript
public readonly organizationRoleNameInput: string;
```

- *Type:* string

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```typescript
public readonly permissionTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```typescript
public readonly stackSetNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GrafanaWorkspaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a> | cdktf.IResolvable

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: GrafanaWorkspaceVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

const grafanaWorkspaceConfig: grafanaWorkspace.GrafanaWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">permissionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#permission_type GrafanaWorkspace#permission_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration">configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#configuration GrafanaWorkspace#configuration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">dataSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#data_sources GrafanaWorkspace#data_sources}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#description GrafanaWorkspace#description}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#id GrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#name GrafanaWorkspace#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#role_arn GrafanaWorkspace#role_arn}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">stackSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags GrafanaWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags_all GrafanaWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#permission_type GrafanaWorkspace#permission_type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#configuration GrafanaWorkspace#configuration}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#data_sources GrafanaWorkspace#data_sources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#description GrafanaWorkspace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#id GrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#name GrafanaWorkspace#name}.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#role_arn GrafanaWorkspace#role_arn}.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags GrafanaWorkspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags_all GrafanaWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrafanaWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#timeouts GrafanaWorkspace#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GrafanaWorkspaceVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceTimeouts <a name="GrafanaWorkspaceTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

const grafanaWorkspaceTimeouts: grafanaWorkspace.GrafanaWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#create GrafanaWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#update GrafanaWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#create GrafanaWorkspace#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#update GrafanaWorkspace#update}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

const grafanaWorkspaceVpcConfiguration: grafanaWorkspace.GrafanaWorkspaceVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceTimeoutsOutputReference <a name="GrafanaWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

new grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrafanaWorkspaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a> | cdktf.IResolvable

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktf/provider-aws'

new grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrafanaWorkspaceVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



