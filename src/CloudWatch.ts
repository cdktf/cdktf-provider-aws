// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch
*/
export namespace CloudWatch {
  export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#actions_enabled CloudwatchCompositeAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_actions CloudwatchCompositeAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_description CloudwatchCompositeAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_name CloudwatchCompositeAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_rule CloudwatchCompositeAlarm#alarm_rule}
    */
    readonly alarmRule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#ok_actions CloudwatchCompositeAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags CloudwatchCompositeAlarm#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags_all CloudwatchCompositeAlarm#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm}
  */
  export class CloudwatchCompositeAlarm extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_composite_alarm";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchCompositeAlarmConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_composite_alarm',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._actionsEnabled = config.actionsEnabled;
      this._alarmActions = config.alarmActions;
      this._alarmDescription = config.alarmDescription;
      this._alarmName = config.alarmName;
      this._alarmRule = config.alarmRule;
      this._insufficientDataActions = config.insufficientDataActions;
      this._okActions = config.okActions;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions_enabled - computed: false, optional: true, required: false
    private _actionsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get actionsEnabled() {
      return this.getBooleanAttribute('actions_enabled') as any;
    }
    public set actionsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._actionsEnabled = value;
    }
    public resetActionsEnabled() {
      this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsEnabledInput() {
      return this._actionsEnabled
    }

    // alarm_actions - computed: false, optional: true, required: false
    private _alarmActions?: string[] | undefined; 
    public get alarmActions() {
      return this.getListAttribute('alarm_actions');
    }
    public set alarmActions(value: string[] | undefined) {
      this._alarmActions = value;
    }
    public resetAlarmActions() {
      this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmActionsInput() {
      return this._alarmActions
    }

    // alarm_description - computed: false, optional: true, required: false
    private _alarmDescription?: string | undefined; 
    public get alarmDescription() {
      return this.getStringAttribute('alarm_description');
    }
    public set alarmDescription(value: string | undefined) {
      this._alarmDescription = value;
    }
    public resetAlarmDescription() {
      this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmDescriptionInput() {
      return this._alarmDescription
    }

    // alarm_name - computed: false, optional: false, required: true
    private _alarmName?: string; 
    public get alarmName() {
      return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
      this._alarmName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
      return this._alarmName
    }

    // alarm_rule - computed: false, optional: false, required: true
    private _alarmRule?: string; 
    public get alarmRule() {
      return this.getStringAttribute('alarm_rule');
    }
    public set alarmRule(value: string) {
      this._alarmRule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmRuleInput() {
      return this._alarmRule
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // insufficient_data_actions - computed: false, optional: true, required: false
    private _insufficientDataActions?: string[] | undefined; 
    public get insufficientDataActions() {
      return this.getListAttribute('insufficient_data_actions');
    }
    public set insufficientDataActions(value: string[] | undefined) {
      this._insufficientDataActions = value;
    }
    public resetInsufficientDataActions() {
      this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataActionsInput() {
      return this._insufficientDataActions
    }

    // ok_actions - computed: false, optional: true, required: false
    private _okActions?: string[] | undefined; 
    public get okActions() {
      return this.getListAttribute('ok_actions');
    }
    public set okActions(value: string[] | undefined) {
      this._okActions = value;
    }
    public resetOkActions() {
      this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get okActionsInput() {
      return this._okActions
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
        alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
        alarm_description: cdktf.stringToTerraform(this._alarmDescription),
        alarm_name: cdktf.stringToTerraform(this._alarmName),
        alarm_rule: cdktf.stringToTerraform(this._alarmRule),
        insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
        ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_body CloudwatchDashboard#dashboard_body}
    */
    readonly dashboardBody: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_name CloudwatchDashboard#dashboard_name}
    */
    readonly dashboardName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard}
  */
  export class CloudwatchDashboard extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_dashboard";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchDashboardConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchDashboardConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_dashboard',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dashboardBody = config.dashboardBody;
      this._dashboardName = config.dashboardName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dashboard_arn - computed: true, optional: false, required: false
    public get dashboardArn() {
      return this.getStringAttribute('dashboard_arn');
    }

    // dashboard_body - computed: false, optional: false, required: true
    private _dashboardBody?: string; 
    public get dashboardBody() {
      return this.getStringAttribute('dashboard_body');
    }
    public set dashboardBody(value: string) {
      this._dashboardBody = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardBodyInput() {
      return this._dashboardBody
    }

    // dashboard_name - computed: false, optional: false, required: true
    private _dashboardName?: string; 
    public get dashboardName() {
      return this.getStringAttribute('dashboard_name');
    }
    public set dashboardName(value: string) {
      this._dashboardName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardNameInput() {
      return this._dashboardName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        dashboard_body: cdktf.stringToTerraform(this._dashboardBody),
        dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      };
    }
  }
  export interface CloudwatchLogDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#name CloudwatchLogDestination#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#role_arn CloudwatchLogDestination#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#target_arn CloudwatchLogDestination#target_arn}
    */
    readonly targetArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html aws_cloudwatch_log_destination}
  */
  export class CloudwatchLogDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html aws_cloudwatch_log_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._roleArn = config.roleArn;
      this._targetArn = config.targetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // target_arn - computed: false, optional: false, required: true
    private _targetArn?: string; 
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
      this._targetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
      return this._targetArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        target_arn: cdktf.stringToTerraform(this._targetArn),
      };
    }
  }
  export interface CloudwatchLogDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html#access_policy CloudwatchLogDestinationPolicy#access_policy}
    */
    readonly accessPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html#destination_name CloudwatchLogDestinationPolicy#destination_name}
    */
    readonly destinationName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy}
  */
  export class CloudwatchLogDestinationPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_destination_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDestinationPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_destination_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessPolicy = config.accessPolicy;
      this._destinationName = config.destinationName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policy - computed: false, optional: false, required: true
    private _accessPolicy?: string; 
    public get accessPolicy() {
      return this.getStringAttribute('access_policy');
    }
    public set accessPolicy(value: string) {
      this._accessPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPolicyInput() {
      return this._accessPolicy
    }

    // destination_name - computed: false, optional: false, required: true
    private _destinationName?: string; 
    public get destinationName() {
      return this.getStringAttribute('destination_name');
    }
    public set destinationName(value: string) {
      this._destinationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNameInput() {
      return this._destinationName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_policy: cdktf.stringToTerraform(this._accessPolicy),
        destination_name: cdktf.stringToTerraform(this._destinationName),
      };
    }
  }
  export interface CloudwatchLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#kms_key_id CloudwatchLogGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#name CloudwatchLogGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#name_prefix CloudwatchLogGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#retention_in_days CloudwatchLogGroup#retention_in_days}
    */
    readonly retentionInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#tags CloudwatchLogGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html#tags_all CloudwatchLogGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html aws_cloudwatch_log_group}
  */
  export class CloudwatchLogGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html aws_cloudwatch_log_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._retentionInDays = config.retentionInDays;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // retention_in_days - computed: false, optional: true, required: false
    private _retentionInDays?: number | undefined; 
    public get retentionInDays() {
      return this.getNumberAttribute('retention_in_days');
    }
    public set retentionInDays(value: number | undefined) {
      this._retentionInDays = value;
    }
    public resetRetentionInDays() {
      this._retentionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionInDaysInput() {
      return this._retentionInDays
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#log_group_name CloudwatchLogMetricFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#pattern CloudwatchLogMetricFilter#pattern}
    */
    readonly pattern: string;
    /**
    * metric_transformation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#metric_transformation CloudwatchLogMetricFilter#metric_transformation}
    */
    readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation;
  }
  export interface CloudwatchLogMetricFilterMetricTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#default_value CloudwatchLogMetricFilter#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#dimensions CloudwatchLogMetricFilter#dimensions}
    */
    readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#namespace CloudwatchLogMetricFilter#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#unit CloudwatchLogMetricFilter#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#value CloudwatchLogMetricFilter#value}
    */
    readonly value: string;
  }

  function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct?: CloudwatchLogMetricFilterMetricTransformationOutputReference | CloudwatchLogMetricFilterMetricTransformation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_value: cdktf.stringToTerraform(struct!.defaultValue),
      dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
      name: cdktf.stringToTerraform(struct!.name),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export class CloudwatchLogMetricFilterMetricTransformationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_value - computed: false, optional: true, required: false
    private _defaultValue?: string | undefined; 
    public get defaultValue() {
      return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string | undefined) {
      this._defaultValue = value;
    }
    public resetDefaultValue() {
      this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
      return this._defaultValue
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
      this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // unit - computed: false, optional: true, required: false
    private _unit?: string | undefined; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string | undefined) {
      this._unit = value;
    }
    public resetUnit() {
      this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter}
  */
  export class CloudwatchLogMetricFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_metric_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogMetricFilterConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_metric_filter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._logGroupName = config.logGroupName;
      this._name = config.name;
      this._pattern = config.pattern;
      this._metricTransformation = config.metricTransformation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
      this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // pattern - computed: false, optional: false, required: true
    private _pattern?: string; 
    public get pattern() {
      return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
      this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
      return this._pattern
    }

    // metric_transformation - computed: false, optional: false, required: true
    private _metricTransformation?: CloudwatchLogMetricFilterMetricTransformation; 
    private __metricTransformationOutput = new CloudwatchLogMetricFilterMetricTransformationOutputReference(this as any, "metric_transformation", true);
    public get metricTransformation() {
      return this.__metricTransformationOutput;
    }
    public putMetricTransformation(value: CloudwatchLogMetricFilterMetricTransformation) {
      this._metricTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTransformationInput() {
      return this._metricTransformation
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        log_group_name: cdktf.stringToTerraform(this._logGroupName),
        name: cdktf.stringToTerraform(this._name),
        pattern: cdktf.stringToTerraform(this._pattern),
        metric_transformation: cloudwatchLogMetricFilterMetricTransformationToTerraform(this._metricTransformation),
      };
    }
  }
  export interface CloudwatchLogResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html#policy_document CloudwatchLogResourcePolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html#policy_name CloudwatchLogResourcePolicy#policy_name}
    */
    readonly policyName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy}
  */
  export class CloudwatchLogResourcePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_resource_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogResourcePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogResourcePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_resource_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policyDocument = config.policyDocument;
      this._policyName = config.policyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
      return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
      this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
      return this._policyDocument
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
      return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
      this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
      return this._policyName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy_document: cdktf.stringToTerraform(this._policyDocument),
        policy_name: cdktf.stringToTerraform(this._policyName),
      };
    }
  }
  export interface CloudwatchLogStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html#log_group_name CloudwatchLogStream#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html#name CloudwatchLogStream#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html aws_cloudwatch_log_stream}
  */
  export class CloudwatchLogStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html aws_cloudwatch_log_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogStreamConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._logGroupName = config.logGroupName;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
      this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        log_group_name: cdktf.stringToTerraform(this._logGroupName),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface CloudwatchLogSubscriptionFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#distribution CloudwatchLogSubscriptionFilter#distribution}
    */
    readonly distribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}
    */
    readonly filterPattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#name CloudwatchLogSubscriptionFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#role_arn CloudwatchLogSubscriptionFilter#role_arn}
    */
    readonly roleArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter}
  */
  export class CloudwatchLogSubscriptionFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_subscription_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogSubscriptionFilterConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinationArn = config.destinationArn;
      this._distribution = config.distribution;
      this._filterPattern = config.filterPattern;
      this._logGroupName = config.logGroupName;
      this._name = config.name;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
      return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
      this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
      return this._destinationArn
    }

    // distribution - computed: false, optional: true, required: false
    private _distribution?: string | undefined; 
    public get distribution() {
      return this.getStringAttribute('distribution');
    }
    public set distribution(value: string | undefined) {
      this._distribution = value;
    }
    public resetDistribution() {
      this._distribution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionInput() {
      return this._distribution
    }

    // filter_pattern - computed: false, optional: false, required: true
    private _filterPattern?: string; 
    public get filterPattern() {
      return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
      this._filterPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
      return this._filterPattern
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
      this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        destination_arn: cdktf.stringToTerraform(this._destinationArn),
        distribution: cdktf.stringToTerraform(this._distribution),
        filter_pattern: cdktf.stringToTerraform(this._filterPattern),
        log_group_name: cdktf.stringToTerraform(this._logGroupName),
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface CloudwatchMetricAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#actions_enabled CloudwatchMetricAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_actions CloudwatchMetricAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_description CloudwatchMetricAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_name CloudwatchMetricAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#comparison_operator CloudwatchMetricAlarm#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}
    */
    readonly datapointsToAlarm?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}
    */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}
    */
    readonly evaluationPeriods: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#extended_statistic CloudwatchMetricAlarm#extended_statistic}
    */
    readonly extendedStatistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#ok_actions CloudwatchMetricAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#statistic CloudwatchMetricAlarm#statistic}
    */
    readonly statistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags CloudwatchMetricAlarm#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags_all CloudwatchMetricAlarm#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold CloudwatchMetricAlarm#threshold}
    */
    readonly threshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}
    */
    readonly thresholdMetricId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}
    */
    readonly treatMissingData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
    /**
    * metric_query block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_query CloudwatchMetricAlarm#metric_query}
    */
    readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[];
  }
  export interface CloudwatchMetricAlarmMetricQueryMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}
    */
    readonly period: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#stat CloudwatchMetricAlarm#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
  }

  function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      period: cdktf.numberToTerraform(struct!.period),
      stat: cdktf.stringToTerraform(struct!.stat),
      unit: cdktf.stringToTerraform(struct!.unit),
    }
  }

  export class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName?: string; 
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // namespace - computed: false, optional: true, required: false
    private _namespace?: string | undefined; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string | undefined) {
      this._namespace = value;
    }
    public resetNamespace() {
      this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // period - computed: false, optional: false, required: true
    private _period?: number; 
    public get period() {
      return this.getNumberAttribute('period');
    }
    public set period(value: number) {
      this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
      return this._period
    }

    // stat - computed: false, optional: false, required: true
    private _stat?: string; 
    public get stat() {
      return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
      this._stat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
      return this._stat
    }

    // unit - computed: false, optional: true, required: false
    private _unit?: string | undefined; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string | undefined) {
      this._unit = value;
    }
    public resetUnit() {
      this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }
  }
  export interface CloudwatchMetricAlarmMetricQuery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#account_id CloudwatchMetricAlarm#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#expression CloudwatchMetricAlarm#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#id CloudwatchMetricAlarm#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#label CloudwatchMetricAlarm#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#return_data CloudwatchMetricAlarm#return_data}
    */
    readonly returnData?: boolean | cdktf.IResolvable;
    /**
    * metric block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric CloudwatchMetricAlarm#metric}
    */
    readonly metric?: CloudwatchMetricAlarmMetricQueryMetric;
  }

  function cloudwatchMetricAlarmMetricQueryToTerraform(struct?: CloudwatchMetricAlarmMetricQuery): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account_id: cdktf.stringToTerraform(struct!.accountId),
      expression: cdktf.stringToTerraform(struct!.expression),
      id: cdktf.stringToTerraform(struct!.id),
      label: cdktf.stringToTerraform(struct!.label),
      return_data: cdktf.booleanToTerraform(struct!.returnData),
      metric: cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct!.metric),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm}
  */
  export class CloudwatchMetricAlarm extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_metric_alarm";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricAlarmConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_metric_alarm',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._actionsEnabled = config.actionsEnabled;
      this._alarmActions = config.alarmActions;
      this._alarmDescription = config.alarmDescription;
      this._alarmName = config.alarmName;
      this._comparisonOperator = config.comparisonOperator;
      this._datapointsToAlarm = config.datapointsToAlarm;
      this._dimensions = config.dimensions;
      this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
      this._evaluationPeriods = config.evaluationPeriods;
      this._extendedStatistic = config.extendedStatistic;
      this._insufficientDataActions = config.insufficientDataActions;
      this._metricName = config.metricName;
      this._namespace = config.namespace;
      this._okActions = config.okActions;
      this._period = config.period;
      this._statistic = config.statistic;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._threshold = config.threshold;
      this._thresholdMetricId = config.thresholdMetricId;
      this._treatMissingData = config.treatMissingData;
      this._unit = config.unit;
      this._metricQuery = config.metricQuery;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions_enabled - computed: false, optional: true, required: false
    private _actionsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get actionsEnabled() {
      return this.getBooleanAttribute('actions_enabled') as any;
    }
    public set actionsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._actionsEnabled = value;
    }
    public resetActionsEnabled() {
      this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsEnabledInput() {
      return this._actionsEnabled
    }

    // alarm_actions - computed: false, optional: true, required: false
    private _alarmActions?: string[] | undefined; 
    public get alarmActions() {
      return this.getListAttribute('alarm_actions');
    }
    public set alarmActions(value: string[] | undefined) {
      this._alarmActions = value;
    }
    public resetAlarmActions() {
      this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmActionsInput() {
      return this._alarmActions
    }

    // alarm_description - computed: false, optional: true, required: false
    private _alarmDescription?: string | undefined; 
    public get alarmDescription() {
      return this.getStringAttribute('alarm_description');
    }
    public set alarmDescription(value: string | undefined) {
      this._alarmDescription = value;
    }
    public resetAlarmDescription() {
      this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmDescriptionInput() {
      return this._alarmDescription
    }

    // alarm_name - computed: false, optional: false, required: true
    private _alarmName?: string; 
    public get alarmName() {
      return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
      this._alarmName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
      return this._alarmName
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // comparison_operator - computed: false, optional: false, required: true
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
      return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
      this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
      return this._comparisonOperator
    }

    // datapoints_to_alarm - computed: false, optional: true, required: false
    private _datapointsToAlarm?: number | undefined; 
    public get datapointsToAlarm() {
      return this.getNumberAttribute('datapoints_to_alarm');
    }
    public set datapointsToAlarm(value: number | undefined) {
      this._datapointsToAlarm = value;
    }
    public resetDatapointsToAlarm() {
      this._datapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datapointsToAlarmInput() {
      return this._datapointsToAlarm
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
    }

    // evaluate_low_sample_count_percentiles - computed: true, optional: true, required: false
    private _evaluateLowSampleCountPercentiles?: string | undefined; 
    public get evaluateLowSampleCountPercentiles() {
      return this.getStringAttribute('evaluate_low_sample_count_percentiles');
    }
    public set evaluateLowSampleCountPercentiles(value: string | undefined) {
      this._evaluateLowSampleCountPercentiles = value;
    }
    public resetEvaluateLowSampleCountPercentiles() {
      this._evaluateLowSampleCountPercentiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateLowSampleCountPercentilesInput() {
      return this._evaluateLowSampleCountPercentiles
    }

    // evaluation_periods - computed: false, optional: false, required: true
    private _evaluationPeriods?: number; 
    public get evaluationPeriods() {
      return this.getNumberAttribute('evaluation_periods');
    }
    public set evaluationPeriods(value: number) {
      this._evaluationPeriods = value;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationPeriodsInput() {
      return this._evaluationPeriods
    }

    // extended_statistic - computed: false, optional: true, required: false
    private _extendedStatistic?: string | undefined; 
    public get extendedStatistic() {
      return this.getStringAttribute('extended_statistic');
    }
    public set extendedStatistic(value: string | undefined) {
      this._extendedStatistic = value;
    }
    public resetExtendedStatistic() {
      this._extendedStatistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendedStatisticInput() {
      return this._extendedStatistic
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // insufficient_data_actions - computed: false, optional: true, required: false
    private _insufficientDataActions?: string[] | undefined; 
    public get insufficientDataActions() {
      return this.getListAttribute('insufficient_data_actions');
    }
    public set insufficientDataActions(value: string[] | undefined) {
      this._insufficientDataActions = value;
    }
    public resetInsufficientDataActions() {
      this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataActionsInput() {
      return this._insufficientDataActions
    }

    // metric_name - computed: false, optional: true, required: false
    private _metricName?: string | undefined; 
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string | undefined) {
      this._metricName = value;
    }
    public resetMetricName() {
      this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // namespace - computed: false, optional: true, required: false
    private _namespace?: string | undefined; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string | undefined) {
      this._namespace = value;
    }
    public resetNamespace() {
      this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // ok_actions - computed: false, optional: true, required: false
    private _okActions?: string[] | undefined; 
    public get okActions() {
      return this.getListAttribute('ok_actions');
    }
    public set okActions(value: string[] | undefined) {
      this._okActions = value;
    }
    public resetOkActions() {
      this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get okActionsInput() {
      return this._okActions
    }

    // period - computed: false, optional: true, required: false
    private _period?: number | undefined; 
    public get period() {
      return this.getNumberAttribute('period');
    }
    public set period(value: number | undefined) {
      this._period = value;
    }
    public resetPeriod() {
      this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
      return this._period
    }

    // statistic - computed: false, optional: true, required: false
    private _statistic?: string | undefined; 
    public get statistic() {
      return this.getStringAttribute('statistic');
    }
    public set statistic(value: string | undefined) {
      this._statistic = value;
    }
    public resetStatistic() {
      this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
      return this._statistic
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // threshold - computed: false, optional: true, required: false
    private _threshold?: number | undefined; 
    public get threshold() {
      return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number | undefined) {
      this._threshold = value;
    }
    public resetThreshold() {
      this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
      return this._threshold
    }

    // threshold_metric_id - computed: false, optional: true, required: false
    private _thresholdMetricId?: string | undefined; 
    public get thresholdMetricId() {
      return this.getStringAttribute('threshold_metric_id');
    }
    public set thresholdMetricId(value: string | undefined) {
      this._thresholdMetricId = value;
    }
    public resetThresholdMetricId() {
      this._thresholdMetricId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdMetricIdInput() {
      return this._thresholdMetricId
    }

    // treat_missing_data - computed: false, optional: true, required: false
    private _treatMissingData?: string | undefined; 
    public get treatMissingData() {
      return this.getStringAttribute('treat_missing_data');
    }
    public set treatMissingData(value: string | undefined) {
      this._treatMissingData = value;
    }
    public resetTreatMissingData() {
      this._treatMissingData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatMissingDataInput() {
      return this._treatMissingData
    }

    // unit - computed: false, optional: true, required: false
    private _unit?: string | undefined; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string | undefined) {
      this._unit = value;
    }
    public resetUnit() {
      this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // metric_query - computed: false, optional: true, required: false
    private _metricQuery?: CloudwatchMetricAlarmMetricQuery[] | undefined; 
    public get metricQuery() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('metric_query') as any;
    }
    public set metricQuery(value: CloudwatchMetricAlarmMetricQuery[] | undefined) {
      this._metricQuery = value;
    }
    public resetMetricQuery() {
      this._metricQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricQueryInput() {
      return this._metricQuery
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
        alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
        alarm_description: cdktf.stringToTerraform(this._alarmDescription),
        alarm_name: cdktf.stringToTerraform(this._alarmName),
        comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
        datapoints_to_alarm: cdktf.numberToTerraform(this._datapointsToAlarm),
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(this._dimensions),
        evaluate_low_sample_count_percentiles: cdktf.stringToTerraform(this._evaluateLowSampleCountPercentiles),
        evaluation_periods: cdktf.numberToTerraform(this._evaluationPeriods),
        extended_statistic: cdktf.stringToTerraform(this._extendedStatistic),
        insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
        metric_name: cdktf.stringToTerraform(this._metricName),
        namespace: cdktf.stringToTerraform(this._namespace),
        ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
        period: cdktf.numberToTerraform(this._period),
        statistic: cdktf.stringToTerraform(this._statistic),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        threshold: cdktf.numberToTerraform(this._threshold),
        threshold_metric_id: cdktf.stringToTerraform(this._thresholdMetricId),
        treat_missing_data: cdktf.stringToTerraform(this._treatMissingData),
        unit: cdktf.stringToTerraform(this._unit),
        metric_query: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform)(this._metricQuery),
      };
    }
  }
  export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#firehose_arn CloudwatchMetricStream#firehose_arn}
    */
    readonly firehoseArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name CloudwatchMetricStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name_prefix CloudwatchMetricStream#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#output_format CloudwatchMetricStream#output_format}
    */
    readonly outputFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#role_arn CloudwatchMetricStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags CloudwatchMetricStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags_all CloudwatchMetricStream#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * exclude_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#exclude_filter CloudwatchMetricStream#exclude_filter}
    */
    readonly excludeFilter?: CloudwatchMetricStreamExcludeFilter[];
    /**
    * include_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#include_filter CloudwatchMetricStream#include_filter}
    */
    readonly includeFilter?: CloudwatchMetricStreamIncludeFilter[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#timeouts CloudwatchMetricStream#timeouts}
    */
    readonly timeouts?: CloudwatchMetricStreamTimeouts;
  }
  export interface CloudwatchMetricStreamExcludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
  }

  function cloudwatchMetricStreamExcludeFilterToTerraform(struct?: CloudwatchMetricStreamExcludeFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      namespace: cdktf.stringToTerraform(struct!.namespace),
    }
  }

  export interface CloudwatchMetricStreamIncludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
  }

  function cloudwatchMetricStreamIncludeFilterToTerraform(struct?: CloudwatchMetricStreamIncludeFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      namespace: cdktf.stringToTerraform(struct!.namespace),
    }
  }

  export interface CloudwatchMetricStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#create CloudwatchMetricStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#delete CloudwatchMetricStream#delete}
    */
    readonly delete?: string;
  }

  function cloudwatchMetricStreamTimeoutsToTerraform(struct?: CloudwatchMetricStreamTimeoutsOutputReference | CloudwatchMetricStreamTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class CloudwatchMetricStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream}
  */
  export class CloudwatchMetricStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_metric_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricStreamConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_metric_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._firehoseArn = config.firehoseArn;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._outputFormat = config.outputFormat;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._excludeFilter = config.excludeFilter;
      this._includeFilter = config.includeFilter;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // firehose_arn - computed: false, optional: false, required: true
    private _firehoseArn?: string; 
    public get firehoseArn() {
      return this.getStringAttribute('firehose_arn');
    }
    public set firehoseArn(value: string) {
      this._firehoseArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseArnInput() {
      return this._firehoseArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_update_date - computed: true, optional: false, required: false
    public get lastUpdateDate() {
      return this.getStringAttribute('last_update_date');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // output_format - computed: false, optional: false, required: true
    private _outputFormat?: string; 
    public get outputFormat() {
      return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
      this._outputFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
      return this._outputFormat
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // exclude_filter - computed: false, optional: true, required: false
    private _excludeFilter?: CloudwatchMetricStreamExcludeFilter[] | undefined; 
    public get excludeFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('exclude_filter') as any;
    }
    public set excludeFilter(value: CloudwatchMetricStreamExcludeFilter[] | undefined) {
      this._excludeFilter = value;
    }
    public resetExcludeFilter() {
      this._excludeFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeFilterInput() {
      return this._excludeFilter
    }

    // include_filter - computed: false, optional: true, required: false
    private _includeFilter?: CloudwatchMetricStreamIncludeFilter[] | undefined; 
    public get includeFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('include_filter') as any;
    }
    public set includeFilter(value: CloudwatchMetricStreamIncludeFilter[] | undefined) {
      this._includeFilter = value;
    }
    public resetIncludeFilter() {
      this._includeFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeFilterInput() {
      return this._includeFilter
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudwatchMetricStreamTimeouts | undefined; 
    private __timeoutsOutput = new CloudwatchMetricStreamTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudwatchMetricStreamTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        firehose_arn: cdktf.stringToTerraform(this._firehoseArn),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        output_format: cdktf.stringToTerraform(this._outputFormat),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        exclude_filter: cdktf.listMapper(cloudwatchMetricStreamExcludeFilterToTerraform)(this._excludeFilter),
        include_filter: cdktf.listMapper(cloudwatchMetricStreamIncludeFilterToTerraform)(this._includeFilter),
        timeouts: cloudwatchMetricStreamTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#log_group_names CloudwatchQueryDefinition#log_group_names}
    */
    readonly logGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#name CloudwatchQueryDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#query_string CloudwatchQueryDefinition#query_string}
    */
    readonly queryString: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition}
  */
  export class CloudwatchQueryDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_query_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchQueryDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchQueryDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_query_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._logGroupNames = config.logGroupNames;
      this._name = config.name;
      this._queryString = config.queryString;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_names - computed: false, optional: true, required: false
    private _logGroupNames?: string[] | undefined; 
    public get logGroupNames() {
      return this.getListAttribute('log_group_names');
    }
    public set logGroupNames(value: string[] | undefined) {
      this._logGroupNames = value;
    }
    public resetLogGroupNames() {
      this._logGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNamesInput() {
      return this._logGroupNames
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // query_definition_id - computed: true, optional: false, required: false
    public get queryDefinitionId() {
      return this.getStringAttribute('query_definition_id');
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: string; 
    public get queryString() {
      return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
      this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
      return this._queryString
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        log_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._logGroupNames),
        name: cdktf.stringToTerraform(this._name),
        query_string: cdktf.stringToTerraform(this._queryString),
      };
    }
  }
  export interface DataAwsCloudwatchLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#name DataAwsCloudwatchLogGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#tags DataAwsCloudwatchLogGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group}
  */
  export class DataAwsCloudwatchLogGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getNumberAttribute('creation_time');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // retention_in_days - computed: true, optional: false, required: false
    public get retentionInDays() {
      return this.getNumberAttribute('retention_in_days');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsCloudwatchLogGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html#log_group_name_prefix DataAwsCloudwatchLogGroups#log_group_name_prefix}
    */
    readonly logGroupNamePrefix: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups}
  */
  export class DataAwsCloudwatchLogGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_log_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_log_groups',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._logGroupNamePrefix = config.logGroupNamePrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_name_prefix - computed: false, optional: false, required: true
    private _logGroupNamePrefix?: string; 
    public get logGroupNamePrefix() {
      return this.getStringAttribute('log_group_name_prefix');
    }
    public set logGroupNamePrefix(value: string) {
      this._logGroupNamePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNamePrefixInput() {
      return this._logGroupNamePrefix
    }

    // log_group_names - computed: true, optional: false, required: false
    public get logGroupNames() {
      return this.getListAttribute('log_group_names');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        log_group_name_prefix: cdktf.stringToTerraform(this._logGroupNamePrefix),
      };
    }
  }
}
